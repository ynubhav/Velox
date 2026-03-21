"use client";

import React, { useMemo } from "react";
import { Lock, Zap, ZoomIn, ZoomOut, Maximize, ShieldCheck, Terminal, Layers } from "lucide-react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { motion } from "framer-motion";

type Route = {
  _id: string;
  method: string;
  path: string;
  authRequired: boolean;
  cacheEnabled: boolean;
  ttl?: number;
};

type TreeNode = {
  segment: string;
  fullPath: string;
  children: Record<string, TreeNode>;
  endpoints: Route[];
};

export function RouteFlowChart({ routes }: { routes: Route[] }) {
  const tree = useMemo(() => {
    const root: TreeNode = { segment: "root", fullPath: "/", children: {}, endpoints: [] };

    routes.forEach((route) => {
      const segments = route.path.split("/").filter((s) => s.length > 0);
      let currentNode = root;
      let currentPath = "";

      if (segments.length === 0) {
        currentNode.endpoints.push(route);
        return;
      }

      segments.forEach((segment, index) => {
        currentPath += `/${segment}`;
        
        if (!currentNode.children[segment]) {
          currentNode.children[segment] = {
            segment,
            fullPath: currentPath,
            children: {},
            endpoints: [],
          };
        }
        
        currentNode = currentNode.children[segment];
        
        if (index === segments.length - 1) {
          currentNode.endpoints.push(route);
        }
      });
    });

    return root;
  }, [routes]);

  if (routes.length === 0) {
    return (
      <div className="flex h-full items-center justify-center font-mono opacity-20">
        <p className="text-[10px] font-bold tracking-[.5em] uppercase text-center">
            // NO_ACTIVE_ROUTES_TO_VISUALIZE
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative font-mono text-sm flex flex-col">
      <div className="flex-1 w-full bg-card/50 overflow-hidden relative cursor-grab active:cursor-grabbing">
        <TransformWrapper
          initialPositionX={0}
          initialY={100}
          initialScale={1}
          minScale={0.1}
          maxScale={5}
          centerOnInit={true}
          wheel={{ step: 0.1 }}
        >
          {({ zoomIn, zoomOut, resetTransform }) => (
            <>
              {/* Terminal Controls */}
              <div className="absolute bottom-6 right-6 z-50 flex flex-col gap-2">
                <button 
                  onClick={() => zoomIn(0.25)} 
                  className="bg-muted border-2 border-primary/10 hover:border-accent p-3 text-muted-foreground hover:text-accent transition-all"
                  title="INCREASE_MAGNIFICATION"
                >
                  <ZoomIn size={16} />
                </button>
                <button 
                  onClick={() => zoomOut(0.25)} 
                  className="bg-muted border-2 border-primary/10 hover:border-accent p-3 text-muted-foreground hover:text-accent transition-all"
                  title="DECREASE_MAGNIFICATION"
                >
                  <ZoomOut size={16} />
                </button>
                <button 
                  onClick={() => resetTransform()} 
                  className="bg-muted border-2 border-primary/10 hover:border-accent p-3 text-muted-foreground hover:text-accent transition-all"
                  title="RESET_PERSPECTIVE"
                >
                  <Maximize size={16} />
                </button>
              </div>

              {/* Legend overlay */}
              <div className="absolute top-6 right-6 z-30 flex gap-6 text-[8px] font-bold uppercase tracking-widest text-muted-foreground/40 bg-card/80 p-4 border border-primary/5 backdrop-blur-md">
                <div className="flex items-center gap-2">
                   <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                   AUTH_SECURE
                </div>
                <div className="flex items-center gap-2">
                   <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                   CACHE_ACTIVE
                </div>
                <div className="flex items-center gap-2">
                   <div className="w-4 h-[2px] bg-primary/20" />
                   LOGIC_TRAJECTORY
                </div>
              </div>

              <TransformComponent wrapperStyle={{ width: "100%", height: "100%" }}>
                <div className="p-40 min-w-max flex justify-center items-center">
                  <div className="flex flex-col items-center">
                    {/* Root Node */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="w-12 h-12 flex items-center justify-center border-2 border-accent bg-accent/5 text-accent relative z-20 group"
                    >
                      <div className="absolute inset-[-4px] border border-accent/20" />
                      <div className="absolute inset-[-8px] border border-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <Terminal size={18} />
                    </motion.div>
                    
                    {tree.endpoints.length > 0 && (
                      <div className="mt-6 flex flex-col gap-2 relative z-20">
                         <div className="w-px h-6 bg-accent/40 mx-auto" />
                         {tree.endpoints.map(ep => <MethodNode key={ep._id} route={ep} />)}
                      </div>
                    )}
                    
                    {Object.keys(tree.children).length > 0 && (
                      <div className="mt-8 flex gap-24 pt-8 relative">
                        {/* Horizontal Schematic Line */}
                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary/10" />
                           
                        {Object.values(tree.children).map((childNode, i, arr) => (
                          <div key={childNode.fullPath} className="relative flex flex-col items-center">
                            {/* Vertical Trajectory Line */}
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-[2px] h-8 bg-primary/10" />
                            <TreeNodeView node={childNode} />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </TransformComponent>
            </>
          )}
        </TransformWrapper>
      </div>
    </div>
  );
}

function TreeNodeView({ node }: { node: TreeNode }) {
  const hasChildren = Object.keys(node.children).length > 0;
  const isVariable = node.segment.startsWith(":");
  
  return (
    <div className="flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`px-6 py-2.5 border-2 text-[11px] font-bold tracking-widest uppercase transition-all relative group z-20 ${
          isVariable 
            ? 'border-amber-500/40 bg-amber-500/5 text-amber-500 hover:border-amber-500 shadow-[0_0_15px_-5px_rgba(245,158,11,0.2)]' 
            : 'border-primary/20 bg-muted text-primary hover:border-primary/60'
        }`}
      >
        <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 border border-current opacity-20" />
        <div className="flex items-center gap-2">
           <span className="opacity-30">/</span>
           {node.segment}
        </div>
      </motion.div>

      {node.endpoints.length > 0 && (
        <div className="mt-6 flex flex-col gap-3 items-center relative z-20">
          <div className="w-[2px] h-6 bg-primary/10" />
          <div className="flex flex-col gap-2">
            {node.endpoints.map(ep => <MethodNode key={ep._id} route={ep} />)}
          </div>
        </div>
      )}

      {hasChildren && (
        <div className="relative mt-8 flex gap-12 pt-8">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary/10" />
          <div className="absolute -top-8 w-[2px] h-8 bg-primary/10 left-1/2 -translate-x-1/2"></div>
            
          {Object.values(node.children).map(childNode => (
            <div key={childNode.fullPath} className="relative flex flex-col items-center">
               <div className="absolute -top-8 w-[2px] h-8 bg-primary/10 left-1/2 -translate-x-1/2" />
               <TreeNodeView node={childNode} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function MethodNode({ route }: { route: Route }) {
  const methodColors: Record<string, string> = {
    GET: "border-emerald-500/40 text-emerald-500 bg-emerald-500/5",
    POST: "border-blue-500/40 text-blue-500 bg-blue-500/5",
    PUT: "border-amber-500/40 text-amber-500 bg-amber-500/5",
    DELETE: "border-red-500/40 text-red-500 bg-red-500/5",
  };

  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className={`flex items-center gap-3 border-2 px-4 py-1.5 text-[9px] font-bold tracking-[.2em] transition-all shadow-sm ${methodColors[route.method] || "border-muted-foreground/40 text-muted-foreground bg-muted-foreground/5"}`}
    >
      <div className="flex items-center gap-2">
        {route.method}
        {(route.authRequired || route.cacheEnabled) && (
          <div className="flex gap-1.5 ml-2 pl-2 border-l border-current/20">
            {route.authRequired && <Lock size={10} className={route.authRequired ? 'text-emerald-500' : 'opacity-20'} />}
            {route.cacheEnabled && <Zap size={10} className={route.cacheEnabled ? 'text-accent' : 'opacity-20'} />}
          </div>
        )}
      </div>
    </motion.div>
  );
}
