var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/unenv/dist/runtime/_internal/utils.mjs
// @__NO_SIDE_EFFECTS__
function createNotImplementedError(name) {
  return new Error(`[unenv] ${name} is not implemented yet!`);
}
// @__NO_SIDE_EFFECTS__
function notImplemented(name) {
  const fn = /* @__PURE__ */ __name(() => {
    throw /* @__PURE__ */ createNotImplementedError(name);
  }, "fn");
  return Object.assign(fn, { __unenv__: true });
}
// @__NO_SIDE_EFFECTS__
function notImplementedClass(name) {
  return class {
    __unenv__ = true;
    constructor() {
      throw new Error(`[unenv] ${name} is not implemented yet!`);
    }
  };
}
var init_utils = __esm({
  "node_modules/unenv/dist/runtime/_internal/utils.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name(createNotImplementedError, "createNotImplementedError");
    __name(notImplemented, "notImplemented");
    __name(notImplementedClass, "notImplementedClass");
  }
});

// node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs
var _timeOrigin, _performanceNow, nodeTiming, PerformanceEntry, PerformanceMark, PerformanceMeasure, PerformanceResourceTiming, PerformanceObserverEntryList, Performance, PerformanceObserver, performance2;
var init_performance = __esm({
  "node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils();
    _timeOrigin = globalThis.performance?.timeOrigin ?? Date.now();
    _performanceNow = globalThis.performance?.now ? globalThis.performance.now.bind(globalThis.performance) : () => Date.now() - _timeOrigin;
    nodeTiming = {
      name: "node",
      entryType: "node",
      startTime: 0,
      duration: 0,
      nodeStart: 0,
      v8Start: 0,
      bootstrapComplete: 0,
      environment: 0,
      loopStart: 0,
      loopExit: 0,
      idleTime: 0,
      uvMetricsInfo: {
        loopCount: 0,
        events: 0,
        eventsWaiting: 0
      },
      detail: void 0,
      toJSON() {
        return this;
      }
    };
    PerformanceEntry = class {
      static {
        __name(this, "PerformanceEntry");
      }
      __unenv__ = true;
      detail;
      entryType = "event";
      name;
      startTime;
      constructor(name, options) {
        this.name = name;
        this.startTime = options?.startTime || _performanceNow();
        this.detail = options?.detail;
      }
      get duration() {
        return _performanceNow() - this.startTime;
      }
      toJSON() {
        return {
          name: this.name,
          entryType: this.entryType,
          startTime: this.startTime,
          duration: this.duration,
          detail: this.detail
        };
      }
    };
    PerformanceMark = class PerformanceMark2 extends PerformanceEntry {
      static {
        __name(this, "PerformanceMark");
      }
      entryType = "mark";
      constructor() {
        super(...arguments);
      }
      get duration() {
        return 0;
      }
    };
    PerformanceMeasure = class extends PerformanceEntry {
      static {
        __name(this, "PerformanceMeasure");
      }
      entryType = "measure";
    };
    PerformanceResourceTiming = class extends PerformanceEntry {
      static {
        __name(this, "PerformanceResourceTiming");
      }
      entryType = "resource";
      serverTiming = [];
      connectEnd = 0;
      connectStart = 0;
      decodedBodySize = 0;
      domainLookupEnd = 0;
      domainLookupStart = 0;
      encodedBodySize = 0;
      fetchStart = 0;
      initiatorType = "";
      name = "";
      nextHopProtocol = "";
      redirectEnd = 0;
      redirectStart = 0;
      requestStart = 0;
      responseEnd = 0;
      responseStart = 0;
      secureConnectionStart = 0;
      startTime = 0;
      transferSize = 0;
      workerStart = 0;
      responseStatus = 0;
    };
    PerformanceObserverEntryList = class {
      static {
        __name(this, "PerformanceObserverEntryList");
      }
      __unenv__ = true;
      getEntries() {
        return [];
      }
      getEntriesByName(_name, _type) {
        return [];
      }
      getEntriesByType(type) {
        return [];
      }
    };
    Performance = class {
      static {
        __name(this, "Performance");
      }
      __unenv__ = true;
      timeOrigin = _timeOrigin;
      eventCounts = /* @__PURE__ */ new Map();
      _entries = [];
      _resourceTimingBufferSize = 0;
      navigation = void 0;
      timing = void 0;
      timerify(_fn, _options) {
        throw createNotImplementedError("Performance.timerify");
      }
      get nodeTiming() {
        return nodeTiming;
      }
      eventLoopUtilization() {
        return {};
      }
      markResourceTiming() {
        return new PerformanceResourceTiming("");
      }
      onresourcetimingbufferfull = null;
      now() {
        if (this.timeOrigin === _timeOrigin) {
          return _performanceNow();
        }
        return Date.now() - this.timeOrigin;
      }
      clearMarks(markName) {
        this._entries = markName ? this._entries.filter((e) => e.name !== markName) : this._entries.filter((e) => e.entryType !== "mark");
      }
      clearMeasures(measureName) {
        this._entries = measureName ? this._entries.filter((e) => e.name !== measureName) : this._entries.filter((e) => e.entryType !== "measure");
      }
      clearResourceTimings() {
        this._entries = this._entries.filter((e) => e.entryType !== "resource" || e.entryType !== "navigation");
      }
      getEntries() {
        return this._entries;
      }
      getEntriesByName(name, type) {
        return this._entries.filter((e) => e.name === name && (!type || e.entryType === type));
      }
      getEntriesByType(type) {
        return this._entries.filter((e) => e.entryType === type);
      }
      mark(name, options) {
        const entry = new PerformanceMark(name, options);
        this._entries.push(entry);
        return entry;
      }
      measure(measureName, startOrMeasureOptions, endMark) {
        let start;
        let end;
        if (typeof startOrMeasureOptions === "string") {
          start = this.getEntriesByName(startOrMeasureOptions, "mark")[0]?.startTime;
          end = this.getEntriesByName(endMark, "mark")[0]?.startTime;
        } else {
          start = Number.parseFloat(startOrMeasureOptions?.start) || this.now();
          end = Number.parseFloat(startOrMeasureOptions?.end) || this.now();
        }
        const entry = new PerformanceMeasure(measureName, {
          startTime: start,
          detail: {
            start,
            end
          }
        });
        this._entries.push(entry);
        return entry;
      }
      setResourceTimingBufferSize(maxSize) {
        this._resourceTimingBufferSize = maxSize;
      }
      addEventListener(type, listener, options) {
        throw createNotImplementedError("Performance.addEventListener");
      }
      removeEventListener(type, listener, options) {
        throw createNotImplementedError("Performance.removeEventListener");
      }
      dispatchEvent(event) {
        throw createNotImplementedError("Performance.dispatchEvent");
      }
      toJSON() {
        return this;
      }
    };
    PerformanceObserver = class {
      static {
        __name(this, "PerformanceObserver");
      }
      __unenv__ = true;
      static supportedEntryTypes = [];
      _callback = null;
      constructor(callback) {
        this._callback = callback;
      }
      takeRecords() {
        return [];
      }
      disconnect() {
        throw createNotImplementedError("PerformanceObserver.disconnect");
      }
      observe(options) {
        throw createNotImplementedError("PerformanceObserver.observe");
      }
      bind(fn) {
        return fn;
      }
      runInAsyncScope(fn, thisArg, ...args) {
        return fn.call(thisArg, ...args);
      }
      asyncId() {
        return 0;
      }
      triggerAsyncId() {
        return 0;
      }
      emitDestroy() {
        return this;
      }
    };
    performance2 = globalThis.performance && "addEventListener" in globalThis.performance ? globalThis.performance : new Performance();
  }
});

// node_modules/unenv/dist/runtime/node/perf_hooks.mjs
var init_perf_hooks = __esm({
  "node_modules/unenv/dist/runtime/node/perf_hooks.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_performance();
  }
});

// node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs
var init_performance2 = __esm({
  "node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs"() {
    init_perf_hooks();
    if (!("__unenv__" in performance2)) {
      const proto = Performance.prototype;
      for (const key of Object.getOwnPropertyNames(proto)) {
        if (key !== "constructor" && !(key in performance2)) {
          const desc = Object.getOwnPropertyDescriptor(proto, key);
          if (desc) {
            Object.defineProperty(performance2, key, desc);
          }
        }
      }
    }
    globalThis.performance = performance2;
    globalThis.Performance = Performance;
    globalThis.PerformanceEntry = PerformanceEntry;
    globalThis.PerformanceMark = PerformanceMark;
    globalThis.PerformanceMeasure = PerformanceMeasure;
    globalThis.PerformanceObserver = PerformanceObserver;
    globalThis.PerformanceObserverEntryList = PerformanceObserverEntryList;
    globalThis.PerformanceResourceTiming = PerformanceResourceTiming;
  }
});

// node_modules/unenv/dist/runtime/mock/noop.mjs
var noop_default;
var init_noop = __esm({
  "node_modules/unenv/dist/runtime/mock/noop.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    noop_default = Object.assign(() => {
    }, { __unenv__: true });
  }
});

// node_modules/unenv/dist/runtime/node/console.mjs
import { Writable } from "node:stream";
var _console, _ignoreErrors, _stderr, _stdout, log, info, trace, debug, table, error, warn, createTask, clear, count, countReset, dir, dirxml, group, groupEnd, groupCollapsed, profile, profileEnd, time, timeEnd, timeLog, timeStamp, Console, _times, _stdoutErrorHandler, _stderrErrorHandler;
var init_console = __esm({
  "node_modules/unenv/dist/runtime/node/console.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_noop();
    init_utils();
    _console = globalThis.console;
    _ignoreErrors = true;
    _stderr = new Writable();
    _stdout = new Writable();
    log = _console?.log ?? noop_default;
    info = _console?.info ?? log;
    trace = _console?.trace ?? info;
    debug = _console?.debug ?? log;
    table = _console?.table ?? log;
    error = _console?.error ?? log;
    warn = _console?.warn ?? error;
    createTask = _console?.createTask ?? /* @__PURE__ */ notImplemented("console.createTask");
    clear = _console?.clear ?? noop_default;
    count = _console?.count ?? noop_default;
    countReset = _console?.countReset ?? noop_default;
    dir = _console?.dir ?? noop_default;
    dirxml = _console?.dirxml ?? noop_default;
    group = _console?.group ?? noop_default;
    groupEnd = _console?.groupEnd ?? noop_default;
    groupCollapsed = _console?.groupCollapsed ?? noop_default;
    profile = _console?.profile ?? noop_default;
    profileEnd = _console?.profileEnd ?? noop_default;
    time = _console?.time ?? noop_default;
    timeEnd = _console?.timeEnd ?? noop_default;
    timeLog = _console?.timeLog ?? noop_default;
    timeStamp = _console?.timeStamp ?? noop_default;
    Console = _console?.Console ?? /* @__PURE__ */ notImplementedClass("console.Console");
    _times = /* @__PURE__ */ new Map();
    _stdoutErrorHandler = noop_default;
    _stderrErrorHandler = noop_default;
  }
});

// node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs
var workerdConsole, assert, clear2, context, count2, countReset2, createTask2, debug2, dir2, dirxml2, error2, group2, groupCollapsed2, groupEnd2, info2, log2, profile2, profileEnd2, table2, time2, timeEnd2, timeLog2, timeStamp2, trace2, warn2, console_default;
var init_console2 = __esm({
  "node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_console();
    workerdConsole = globalThis["console"];
    ({
      assert,
      clear: clear2,
      context: (
        // @ts-expect-error undocumented public API
        context
      ),
      count: count2,
      countReset: countReset2,
      createTask: (
        // @ts-expect-error undocumented public API
        createTask2
      ),
      debug: debug2,
      dir: dir2,
      dirxml: dirxml2,
      error: error2,
      group: group2,
      groupCollapsed: groupCollapsed2,
      groupEnd: groupEnd2,
      info: info2,
      log: log2,
      profile: profile2,
      profileEnd: profileEnd2,
      table: table2,
      time: time2,
      timeEnd: timeEnd2,
      timeLog: timeLog2,
      timeStamp: timeStamp2,
      trace: trace2,
      warn: warn2
    } = workerdConsole);
    Object.assign(workerdConsole, {
      Console,
      _ignoreErrors,
      _stderr,
      _stderrErrorHandler,
      _stdout,
      _stdoutErrorHandler,
      _times
    });
    console_default = workerdConsole;
  }
});

// node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console = __esm({
  "node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console"() {
    init_console2();
    globalThis.console = console_default;
  }
});

// node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs
var hrtime;
var init_hrtime = __esm({
  "node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    hrtime = /* @__PURE__ */ Object.assign(/* @__PURE__ */ __name(function hrtime2(startTime) {
      const now = Date.now();
      const seconds = Math.trunc(now / 1e3);
      const nanos = now % 1e3 * 1e6;
      if (startTime) {
        let diffSeconds = seconds - startTime[0];
        let diffNanos = nanos - startTime[0];
        if (diffNanos < 0) {
          diffSeconds = diffSeconds - 1;
          diffNanos = 1e9 + diffNanos;
        }
        return [diffSeconds, diffNanos];
      }
      return [seconds, nanos];
    }, "hrtime"), { bigint: /* @__PURE__ */ __name(function bigint() {
      return BigInt(Date.now() * 1e6);
    }, "bigint") });
  }
});

// node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs
var ReadStream;
var init_read_stream = __esm({
  "node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    ReadStream = class {
      static {
        __name(this, "ReadStream");
      }
      fd;
      isRaw = false;
      isTTY = false;
      constructor(fd) {
        this.fd = fd;
      }
      setRawMode(mode) {
        this.isRaw = mode;
        return this;
      }
    };
  }
});

// node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs
var WriteStream;
var init_write_stream = __esm({
  "node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    WriteStream = class {
      static {
        __name(this, "WriteStream");
      }
      fd;
      columns = 80;
      rows = 24;
      isTTY = false;
      constructor(fd) {
        this.fd = fd;
      }
      clearLine(dir3, callback) {
        callback && callback();
        return false;
      }
      clearScreenDown(callback) {
        callback && callback();
        return false;
      }
      cursorTo(x, y, callback) {
        callback && typeof callback === "function" && callback();
        return false;
      }
      moveCursor(dx, dy, callback) {
        callback && callback();
        return false;
      }
      getColorDepth(env2) {
        return 1;
      }
      hasColors(count3, env2) {
        return false;
      }
      getWindowSize() {
        return [this.columns, this.rows];
      }
      write(str, encoding, cb) {
        if (str instanceof Uint8Array) {
          str = new TextDecoder().decode(str);
        }
        try {
          console.log(str);
        } catch {
        }
        cb && typeof cb === "function" && cb();
        return false;
      }
    };
  }
});

// node_modules/unenv/dist/runtime/node/tty.mjs
var init_tty = __esm({
  "node_modules/unenv/dist/runtime/node/tty.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_read_stream();
    init_write_stream();
  }
});

// node_modules/unenv/dist/runtime/node/internal/process/node-version.mjs
var NODE_VERSION;
var init_node_version = __esm({
  "node_modules/unenv/dist/runtime/node/internal/process/node-version.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    NODE_VERSION = "22.14.0";
  }
});

// node_modules/unenv/dist/runtime/node/internal/process/process.mjs
import { EventEmitter } from "node:events";
var Process;
var init_process = __esm({
  "node_modules/unenv/dist/runtime/node/internal/process/process.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_tty();
    init_utils();
    init_node_version();
    Process = class _Process extends EventEmitter {
      static {
        __name(this, "Process");
      }
      env;
      hrtime;
      nextTick;
      constructor(impl) {
        super();
        this.env = impl.env;
        this.hrtime = impl.hrtime;
        this.nextTick = impl.nextTick;
        for (const prop of [...Object.getOwnPropertyNames(_Process.prototype), ...Object.getOwnPropertyNames(EventEmitter.prototype)]) {
          const value = this[prop];
          if (typeof value === "function") {
            this[prop] = value.bind(this);
          }
        }
      }
      // --- event emitter ---
      emitWarning(warning, type, code) {
        console.warn(`${code ? `[${code}] ` : ""}${type ? `${type}: ` : ""}${warning}`);
      }
      emit(...args) {
        return super.emit(...args);
      }
      listeners(eventName) {
        return super.listeners(eventName);
      }
      // --- stdio (lazy initializers) ---
      #stdin;
      #stdout;
      #stderr;
      get stdin() {
        return this.#stdin ??= new ReadStream(0);
      }
      get stdout() {
        return this.#stdout ??= new WriteStream(1);
      }
      get stderr() {
        return this.#stderr ??= new WriteStream(2);
      }
      // --- cwd ---
      #cwd = "/";
      chdir(cwd2) {
        this.#cwd = cwd2;
      }
      cwd() {
        return this.#cwd;
      }
      // --- dummy props and getters ---
      arch = "";
      platform = "";
      argv = [];
      argv0 = "";
      execArgv = [];
      execPath = "";
      title = "";
      pid = 200;
      ppid = 100;
      get version() {
        return `v${NODE_VERSION}`;
      }
      get versions() {
        return { node: NODE_VERSION };
      }
      get allowedNodeEnvironmentFlags() {
        return /* @__PURE__ */ new Set();
      }
      get sourceMapsEnabled() {
        return false;
      }
      get debugPort() {
        return 0;
      }
      get throwDeprecation() {
        return false;
      }
      get traceDeprecation() {
        return false;
      }
      get features() {
        return {};
      }
      get release() {
        return {};
      }
      get connected() {
        return false;
      }
      get config() {
        return {};
      }
      get moduleLoadList() {
        return [];
      }
      constrainedMemory() {
        return 0;
      }
      availableMemory() {
        return 0;
      }
      uptime() {
        return 0;
      }
      resourceUsage() {
        return {};
      }
      // --- noop methods ---
      ref() {
      }
      unref() {
      }
      // --- unimplemented methods ---
      umask() {
        throw createNotImplementedError("process.umask");
      }
      getBuiltinModule() {
        return void 0;
      }
      getActiveResourcesInfo() {
        throw createNotImplementedError("process.getActiveResourcesInfo");
      }
      exit() {
        throw createNotImplementedError("process.exit");
      }
      reallyExit() {
        throw createNotImplementedError("process.reallyExit");
      }
      kill() {
        throw createNotImplementedError("process.kill");
      }
      abort() {
        throw createNotImplementedError("process.abort");
      }
      dlopen() {
        throw createNotImplementedError("process.dlopen");
      }
      setSourceMapsEnabled() {
        throw createNotImplementedError("process.setSourceMapsEnabled");
      }
      loadEnvFile() {
        throw createNotImplementedError("process.loadEnvFile");
      }
      disconnect() {
        throw createNotImplementedError("process.disconnect");
      }
      cpuUsage() {
        throw createNotImplementedError("process.cpuUsage");
      }
      setUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.setUncaughtExceptionCaptureCallback");
      }
      hasUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.hasUncaughtExceptionCaptureCallback");
      }
      initgroups() {
        throw createNotImplementedError("process.initgroups");
      }
      openStdin() {
        throw createNotImplementedError("process.openStdin");
      }
      assert() {
        throw createNotImplementedError("process.assert");
      }
      binding() {
        throw createNotImplementedError("process.binding");
      }
      // --- attached interfaces ---
      permission = { has: /* @__PURE__ */ notImplemented("process.permission.has") };
      report = {
        directory: "",
        filename: "",
        signal: "SIGUSR2",
        compact: false,
        reportOnFatalError: false,
        reportOnSignal: false,
        reportOnUncaughtException: false,
        getReport: /* @__PURE__ */ notImplemented("process.report.getReport"),
        writeReport: /* @__PURE__ */ notImplemented("process.report.writeReport")
      };
      finalization = {
        register: /* @__PURE__ */ notImplemented("process.finalization.register"),
        unregister: /* @__PURE__ */ notImplemented("process.finalization.unregister"),
        registerBeforeExit: /* @__PURE__ */ notImplemented("process.finalization.registerBeforeExit")
      };
      memoryUsage = Object.assign(() => ({
        arrayBuffers: 0,
        rss: 0,
        external: 0,
        heapTotal: 0,
        heapUsed: 0
      }), { rss: /* @__PURE__ */ __name(() => 0, "rss") });
      // --- undefined props ---
      mainModule = void 0;
      domain = void 0;
      // optional
      send = void 0;
      exitCode = void 0;
      channel = void 0;
      getegid = void 0;
      geteuid = void 0;
      getgid = void 0;
      getgroups = void 0;
      getuid = void 0;
      setegid = void 0;
      seteuid = void 0;
      setgid = void 0;
      setgroups = void 0;
      setuid = void 0;
      // internals
      _events = void 0;
      _eventsCount = void 0;
      _exiting = void 0;
      _maxListeners = void 0;
      _debugEnd = void 0;
      _debugProcess = void 0;
      _fatalException = void 0;
      _getActiveHandles = void 0;
      _getActiveRequests = void 0;
      _kill = void 0;
      _preload_modules = void 0;
      _rawDebug = void 0;
      _startProfilerIdleNotifier = void 0;
      _stopProfilerIdleNotifier = void 0;
      _tickCallback = void 0;
      _disconnect = void 0;
      _handleQueue = void 0;
      _pendingMessage = void 0;
      _channel = void 0;
      _send = void 0;
      _linkedBinding = void 0;
    };
  }
});

// node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs
var globalProcess, getBuiltinModule, workerdProcess, unenvProcess, exit, features, platform, _channel, _debugEnd, _debugProcess, _disconnect, _events, _eventsCount, _exiting, _fatalException, _getActiveHandles, _getActiveRequests, _handleQueue, _kill, _linkedBinding, _maxListeners, _pendingMessage, _preload_modules, _rawDebug, _send, _startProfilerIdleNotifier, _stopProfilerIdleNotifier, _tickCallback, abort, addListener, allowedNodeEnvironmentFlags, arch, argv, argv0, assert2, availableMemory, binding, channel, chdir, config, connected, constrainedMemory, cpuUsage, cwd, debugPort, disconnect, dlopen, domain, emit, emitWarning, env, eventNames, execArgv, execPath, exitCode, finalization, getActiveResourcesInfo, getegid, geteuid, getgid, getgroups, getMaxListeners, getuid, hasUncaughtExceptionCaptureCallback, hrtime3, initgroups, kill, listenerCount, listeners, loadEnvFile, mainModule, memoryUsage, moduleLoadList, nextTick, off, on, once, openStdin, permission, pid, ppid, prependListener, prependOnceListener, rawListeners, reallyExit, ref, release, removeAllListeners, removeListener, report, resourceUsage, send, setegid, seteuid, setgid, setgroups, setMaxListeners, setSourceMapsEnabled, setuid, setUncaughtExceptionCaptureCallback, sourceMapsEnabled, stderr, stdin, stdout, throwDeprecation, title, traceDeprecation, umask, unref, uptime, version, versions, _process, process_default;
var init_process2 = __esm({
  "node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_hrtime();
    init_process();
    globalProcess = globalThis["process"];
    getBuiltinModule = globalProcess.getBuiltinModule;
    workerdProcess = getBuiltinModule("node:process");
    unenvProcess = new Process({
      env: globalProcess.env,
      hrtime,
      // `nextTick` is available from workerd process v1
      nextTick: workerdProcess.nextTick
    });
    ({ exit, features, platform } = workerdProcess);
    ({
      _channel,
      _debugEnd,
      _debugProcess,
      _disconnect,
      _events,
      _eventsCount,
      _exiting,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _handleQueue,
      _kill,
      _linkedBinding,
      _maxListeners,
      _pendingMessage,
      _preload_modules,
      _rawDebug,
      _send,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      arch,
      argv,
      argv0,
      assert: assert2,
      availableMemory,
      binding,
      channel,
      chdir,
      config,
      connected,
      constrainedMemory,
      cpuUsage,
      cwd,
      debugPort,
      disconnect,
      dlopen,
      domain,
      emit,
      emitWarning,
      env,
      eventNames,
      execArgv,
      execPath,
      exitCode,
      finalization,
      getActiveResourcesInfo,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getMaxListeners,
      getuid,
      hasUncaughtExceptionCaptureCallback,
      hrtime: hrtime3,
      initgroups,
      kill,
      listenerCount,
      listeners,
      loadEnvFile,
      mainModule,
      memoryUsage,
      moduleLoadList,
      nextTick,
      off,
      on,
      once,
      openStdin,
      permission,
      pid,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      reallyExit,
      ref,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      send,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setMaxListeners,
      setSourceMapsEnabled,
      setuid,
      setUncaughtExceptionCaptureCallback,
      sourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      throwDeprecation,
      title,
      traceDeprecation,
      umask,
      unref,
      uptime,
      version,
      versions
    } = unenvProcess);
    _process = {
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      hasUncaughtExceptionCaptureCallback,
      setUncaughtExceptionCaptureCallback,
      loadEnvFile,
      sourceMapsEnabled,
      arch,
      argv,
      argv0,
      chdir,
      config,
      connected,
      constrainedMemory,
      availableMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      disconnect,
      emit,
      emitWarning,
      env,
      eventNames,
      execArgv,
      execPath,
      exit,
      finalization,
      features,
      getBuiltinModule,
      getActiveResourcesInfo,
      getMaxListeners,
      hrtime: hrtime3,
      kill,
      listeners,
      listenerCount,
      memoryUsage,
      nextTick,
      on,
      off,
      once,
      pid,
      platform,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      setMaxListeners,
      setSourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      title,
      throwDeprecation,
      traceDeprecation,
      umask,
      uptime,
      version,
      versions,
      // @ts-expect-error old API
      domain,
      initgroups,
      moduleLoadList,
      reallyExit,
      openStdin,
      assert: assert2,
      binding,
      send,
      exitCode,
      channel,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getuid,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setuid,
      permission,
      mainModule,
      _events,
      _eventsCount,
      _exiting,
      _maxListeners,
      _debugEnd,
      _debugProcess,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _kill,
      _preload_modules,
      _rawDebug,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      _disconnect,
      _handleQueue,
      _pendingMessage,
      _channel,
      _send,
      _linkedBinding
    };
    process_default = _process;
  }
});

// node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process = __esm({
  "node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process"() {
    init_process2();
    globalThis.process = process_default;
  }
});

// wrangler-modules-watch:wrangler:modules-watch
var init_wrangler_modules_watch = __esm({
  "wrangler-modules-watch:wrangler:modules-watch"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
  }
});

// node_modules/wrangler/templates/modules-watch-stub.js
var init_modules_watch_stub = __esm({
  "node_modules/wrangler/templates/modules-watch-stub.js"() {
    init_wrangler_modules_watch();
  }
});

// node_modules/node-color-log/index.js
var require_node_color_log = __commonJS({
  "node_modules/node-color-log/index.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var CONFIG = {
      SYSTEM: {
        reset: "\x1B[0m",
        bold: "\x1B[1m",
        dim: "\x1B[2m",
        italic: "\x1B[3m",
        underscore: "\x1B[4m",
        reverse: "\x1B[7m",
        strikethrough: "\x1B[9m",
        backoneline: "\x1B[1A",
        cleanthisline: "\x1B[K"
      },
      FONT: {
        black: "\x1B[30m",
        red: "\x1B[31m",
        green: "\x1B[32m",
        yellow: "\x1B[33m",
        blue: "\x1B[34m",
        magenta: "\x1B[35m",
        cyan: "\x1B[36m",
        white: "\x1B[37m"
      },
      BACKGROUND: {
        black: "\x1B[40m",
        red: "\x1B[41m",
        green: "\x1B[42m",
        yellow: "\x1B[43m",
        blue: "\x1B[44m",
        magenta: "\x1B[45m",
        cyan: "\x1B[46m",
        white: "\x1B[47m"
      }
    };
    var LEVELS = ["success", "debug", "info", "warn", "error", "disable"];
    var Logger = class _Logger {
      static {
        __name(this, "Logger");
      }
      constructor(name) {
        this.command = "";
        this.lastCommand = "";
        this.name = name || "";
        const level = typeof process !== "undefined" ? process.env.LOGGER : void 0;
        if (this.isLevelValid(level)) {
          this.level = level;
        }
        this.noColor = false;
        this._getDate = () => (/* @__PURE__ */ new Date()).toISOString();
        this._customizedConsole = console;
        this._enableFileAndLine = {
          enable: false,
          isShortFile: false
        };
      }
      createNamedLogger(name) {
        return new _Logger(name);
      }
      setLevel(level) {
        if (this.isLevelValid(level)) {
          this.level = level;
        } else {
          throw "Level you are trying to set is invalid";
        }
      }
      setLogStream(newStream) {
        if (newStream.writable) {
          this._customizedConsole = new console.Console(newStream);
        } else {
          throw "invalid writable stream object";
        }
      }
      setLevelNoColor() {
        this.noColor = true;
      }
      setLevelColor() {
        this.noColor = false;
      }
      isLevelValid(level) {
        return LEVELS.includes(level);
      }
      isAllowedLevel(level) {
        return this.level ? LEVELS.indexOf(this.level) <= LEVELS.indexOf(level) : true;
      }
      enableFileAndLine(enable, isShortFile = false) {
        if (typeof enable === "boolean") {
          this._enableFileAndLine.enable = enable;
          this._enableFileAndLine.isShortFile = isShortFile;
        } else {
          console.error("node-color-log warning: enableFileAndLine should be a boolean value.");
        }
      }
      log(...args) {
        this.append(...args);
        if (!this.noColor) {
          this.command += CONFIG.SYSTEM.reset;
        }
        this._print(this.command);
        this.lastCommand = this.command;
        this.command = "";
        return this;
      }
      // deprecated
      joint() {
        console.error("node-color-log warning: `joint` is deprecated, please use `append`");
        this._print(CONFIG.SYSTEM.backoneline + CONFIG.SYSTEM.cleanthisline);
        this.command = "";
        this.lastCommand = this.lastCommand.replace(CONFIG.SYSTEM.backoneline, "");
        this.command += CONFIG.SYSTEM.backoneline;
        this.command += this.lastCommand;
        return this;
      }
      setDate(callback) {
        this._getDate = callback;
      }
      getPrefix() {
        let prefix = `${this._getDate()}`;
        if (this.name) {
          prefix += ` [${this.name}]`;
        }
        if (this._enableFileAndLine.enable) {
          const fileAndLine = getFileAndLine(this._enableFileAndLine.isShortFile);
          if (fileAndLine) {
            prefix += `[${fileAndLine}]`;
          }
        }
        return prefix;
      }
      color(ticket) {
        if (ticket in CONFIG.FONT) {
          this.command += CONFIG.FONT[ticket];
        } else {
          console.error("node-color-log warning: Font color not found! Use the default.");
        }
        return this;
      }
      bgColor(ticket) {
        if (ticket in CONFIG.BACKGROUND) {
          this.command += CONFIG.BACKGROUND[ticket];
        } else {
          console.error("node-color-log warning: Background color not found! Use the default.");
        }
        return this;
      }
      bold() {
        this.command += CONFIG.SYSTEM.bold;
        return this;
      }
      dim() {
        this.command += CONFIG.SYSTEM.dim;
        return this;
      }
      underscore() {
        this.command += CONFIG.SYSTEM.underscore;
        return this;
      }
      strikethrough() {
        this.command += CONFIG.SYSTEM.strikethrough;
        return this;
      }
      reverse() {
        this.command += CONFIG.SYSTEM.reverse;
        return this;
      }
      italic() {
        this.command += CONFIG.SYSTEM.italic;
        return this;
      }
      fontColorLog(ticket, text, setting) {
        let command = "";
        if (setting) {
          command += this.checkSetting(setting);
        }
        if (ticket in CONFIG.FONT) {
          command += CONFIG.FONT[ticket];
        } else {
          console.error("node-color-log warning: Font color not found! Use the default.");
        }
        command += text;
        command += CONFIG.SYSTEM.reset;
        this.lastCommand = command;
        this._print(command);
      }
      bgColorLog(ticket, text, setting) {
        let command = "";
        if (setting) {
          command += this.checkSetting(setting);
        }
        if (ticket in CONFIG.BACKGROUND) {
          command += CONFIG.BACKGROUND[ticket];
        } else {
          console.error("node-color-log warning: Background color not found! Use the default.");
        }
        command += text;
        command += CONFIG.SYSTEM.reset;
        this.lastCommand = command;
        this._print(command);
      }
      colorLog(ticketObj, text, setting) {
        let command = "";
        if (setting) {
          command += this.checkSetting(setting);
        }
        if (ticketObj.font in CONFIG.FONT) {
          command += CONFIG.FONT[ticketObj.font];
        } else {
          console.error("node-color-log warning: Font color not found! Use the default.");
        }
        if (ticketObj.bg in CONFIG.BACKGROUND) {
          command += CONFIG.BACKGROUND[ticketObj.bg];
        } else {
          console.error("node-color-log warning: Background color not found! Use the default.");
        }
        command += text;
        command += CONFIG.SYSTEM.reset;
        this.lastCommand = command;
        this._print(command);
      }
      error(...args) {
        if (!this.isAllowedLevel("error"))
          return;
        if (this.noColor) {
          const d = this.getPrefix();
          this.log(d, " [ERROR] ", ...args);
        } else {
          const d = this.getPrefix();
          this.append(d + " ").bgColor("red").append("[ERROR]").reset().append(" ").color("red").log(...args);
        }
      }
      warn(...args) {
        if (!this.isAllowedLevel("warn"))
          return;
        if (this.noColor) {
          const d = this.getPrefix();
          this.log(d, " [WARN] ", ...args);
        } else {
          const d = this.getPrefix();
          this.append(d + " ").bgColor("yellow").color("black").append("[WARN]").reset().append(" ").color("yellow").log(...args);
        }
      }
      info(...args) {
        if (!this.isAllowedLevel("info"))
          return;
        if (this.noColor) {
          const d = this.getPrefix();
          this.log(d, " [INFO] ", ...args);
        } else {
          const d = this.getPrefix();
          this.append(d + " ").bgColor("green").color("black").append("[INFO]").reset().append(" ").color("green").log(...args);
        }
      }
      debug(...args) {
        if (!this.isAllowedLevel("debug"))
          return;
        if (this.noColor) {
          const d = this.getPrefix();
          this.log(d, " [DEBUG] ", ...args);
        } else {
          const d = this.getPrefix();
          this.append(d + " ").bgColor("cyan").color("black").append("[DEBUG]").reset().append(" ").color("cyan").log(...args);
        }
      }
      success(...args) {
        if (!this.isAllowedLevel("success"))
          return;
        if (this.noColor) {
          const d = this.getPrefix();
          this.log(d, " [SUCCESS] ", ...args);
        } else {
          const d = this.getPrefix();
          this.append(d + " ").bgColor("green").color("black").append("[SUCCESS]").reset().append(" ").color("green").log(...args);
        }
      }
      checkSetting(setting) {
        const validSetting = ["bold", "italic", "dim", "underscore", "reverse", "strikethrough"];
        let command = "";
        for (const item in setting) {
          if (validSetting.indexOf(item) !== -1) {
            if (setting[item] === true) {
              command += CONFIG.SYSTEM[item];
            } else if (setting[item] !== false) {
              console.error(`node-color-log warning: The value ${item} should be boolean.`);
            }
          } else {
            console.error(`node-color-log warning: ${item} is not valid in setting.`);
          }
        }
        return command;
      }
      // helper function to output the the log to stream
      _print(...args) {
        this._customizedConsole.error(...args);
      }
      // helper function to append the command buffer
      append(...args) {
        for (const idx in args) {
          const arg = args[idx];
          if (typeof arg === "string") {
            this.command += arg;
          } else {
            try {
              this.command += JSON.stringify(arg);
            } catch {
              this.command += arg;
            }
          }
          if (args.length > 1 && idx < args.length - 1) {
            this.command += " ";
          }
        }
        return this;
      }
      reset() {
        this.command += CONFIG.SYSTEM.reset;
        return this;
      }
    };
    function getFileAndLine(isShortFile = false) {
      const e = new Error();
      const lines = e.stack.split("\n");
      let line = "";
      for (let i = lines.length - 1; i >= 0; i--) {
        const currentLine = lines[i];
        if (currentLine.includes("Logger.") || currentLine.includes("node-color-log/index.js")) {
          if (i + 1 >= lines.length) {
            return "";
          }
          line = lines[i + 1].trim();
          break;
        }
      }
      let start = line.lastIndexOf("(");
      let end = line.lastIndexOf(")");
      if (start === -1 || end === -1 || start >= end) {
        return "";
      }
      const fileAndLine = line.substring(start + 1, end);
      const parts = fileAndLine.split(":");
      if (parts.length < 2) {
        return "";
      }
      let fileName = parts[0];
      if (isShortFile) {
        fileName = fileAndLine.split("/").pop();
        fileName = fileName.split(":")[0];
      }
      return `${fileName}:${parts[1]}`;
    }
    __name(getFileAndLine, "getFileAndLine");
    var logger2 = new Logger();
    module.exports = logger2;
  }
});

// .wrangler/tmp/bundle-GThiKV/middleware-loader.entry.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// .wrangler/tmp/bundle-GThiKV/middleware-insertion-facade.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// src/index.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/hono/dist/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/hono/dist/hono.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/hono/dist/hono-base.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/hono/dist/compose.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var compose = /* @__PURE__ */ __name((middleware, onError, onNotFound) => {
  return (context2, next) => {
    let index = -1;
    return dispatch(0);
    async function dispatch(i) {
      if (i <= index) {
        throw new Error("next() called multiple times");
      }
      index = i;
      let res;
      let isError = false;
      let handler;
      if (middleware[i]) {
        handler = middleware[i][0][0];
        context2.req.routeIndex = i;
      } else {
        handler = i === middleware.length && next || void 0;
      }
      if (handler) {
        try {
          res = await handler(context2, () => dispatch(i + 1));
        } catch (err) {
          if (err instanceof Error && onError) {
            context2.error = err;
            res = await onError(err, context2);
            isError = true;
          } else {
            throw err;
          }
        }
      } else {
        if (context2.finalized === false && onNotFound) {
          res = await onNotFound(context2);
        }
      }
      if (res && (context2.finalized === false || isError)) {
        context2.res = res;
      }
      return context2;
    }
    __name(dispatch, "dispatch");
  };
}, "compose");

// node_modules/hono/dist/context.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/hono/dist/request.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/hono/dist/http-exception.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/hono/dist/request/constants.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var GET_MATCH_RESULT = /* @__PURE__ */ Symbol();

// node_modules/hono/dist/utils/body.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var parseBody = /* @__PURE__ */ __name(async (request, options = /* @__PURE__ */ Object.create(null)) => {
  const { all = false, dot = false } = options;
  const headers = request instanceof HonoRequest ? request.raw.headers : request.headers;
  const contentType = headers.get("Content-Type");
  if (contentType?.startsWith("multipart/form-data") || contentType?.startsWith("application/x-www-form-urlencoded")) {
    return parseFormData(request, { all, dot });
  }
  return {};
}, "parseBody");
async function parseFormData(request, options) {
  const formData = await request.formData();
  if (formData) {
    return convertFormDataToBodyData(formData, options);
  }
  return {};
}
__name(parseFormData, "parseFormData");
function convertFormDataToBodyData(formData, options) {
  const form = /* @__PURE__ */ Object.create(null);
  formData.forEach((value, key) => {
    const shouldParseAllValues = options.all || key.endsWith("[]");
    if (!shouldParseAllValues) {
      form[key] = value;
    } else {
      handleParsingAllValues(form, key, value);
    }
  });
  if (options.dot) {
    Object.entries(form).forEach(([key, value]) => {
      const shouldParseDotValues = key.includes(".");
      if (shouldParseDotValues) {
        handleParsingNestedValues(form, key, value);
        delete form[key];
      }
    });
  }
  return form;
}
__name(convertFormDataToBodyData, "convertFormDataToBodyData");
var handleParsingAllValues = /* @__PURE__ */ __name((form, key, value) => {
  if (form[key] !== void 0) {
    if (Array.isArray(form[key])) {
      ;
      form[key].push(value);
    } else {
      form[key] = [form[key], value];
    }
  } else {
    if (!key.endsWith("[]")) {
      form[key] = value;
    } else {
      form[key] = [value];
    }
  }
}, "handleParsingAllValues");
var handleParsingNestedValues = /* @__PURE__ */ __name((form, key, value) => {
  let nestedForm = form;
  const keys = key.split(".");
  keys.forEach((key2, index) => {
    if (index === keys.length - 1) {
      nestedForm[key2] = value;
    } else {
      if (!nestedForm[key2] || typeof nestedForm[key2] !== "object" || Array.isArray(nestedForm[key2]) || nestedForm[key2] instanceof File) {
        nestedForm[key2] = /* @__PURE__ */ Object.create(null);
      }
      nestedForm = nestedForm[key2];
    }
  });
}, "handleParsingNestedValues");

// node_modules/hono/dist/utils/url.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var splitPath = /* @__PURE__ */ __name((path) => {
  const paths = path.split("/");
  if (paths[0] === "") {
    paths.shift();
  }
  return paths;
}, "splitPath");
var splitRoutingPath = /* @__PURE__ */ __name((routePath) => {
  const { groups, path } = extractGroupsFromPath(routePath);
  const paths = splitPath(path);
  return replaceGroupMarks(paths, groups);
}, "splitRoutingPath");
var extractGroupsFromPath = /* @__PURE__ */ __name((path) => {
  const groups = [];
  path = path.replace(/\{[^}]+\}/g, (match3, index) => {
    const mark = `@${index}`;
    groups.push([mark, match3]);
    return mark;
  });
  return { groups, path };
}, "extractGroupsFromPath");
var replaceGroupMarks = /* @__PURE__ */ __name((paths, groups) => {
  for (let i = groups.length - 1; i >= 0; i--) {
    const [mark] = groups[i];
    for (let j = paths.length - 1; j >= 0; j--) {
      if (paths[j].includes(mark)) {
        paths[j] = paths[j].replace(mark, groups[i][1]);
        break;
      }
    }
  }
  return paths;
}, "replaceGroupMarks");
var patternCache = {};
var getPattern = /* @__PURE__ */ __name((label, next) => {
  if (label === "*") {
    return "*";
  }
  const match3 = label.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
  if (match3) {
    const cacheKey = `${label}#${next}`;
    if (!patternCache[cacheKey]) {
      if (match3[2]) {
        patternCache[cacheKey] = next && next[0] !== ":" && next[0] !== "*" ? [cacheKey, match3[1], new RegExp(`^${match3[2]}(?=/${next})`)] : [label, match3[1], new RegExp(`^${match3[2]}$`)];
      } else {
        patternCache[cacheKey] = [label, match3[1], true];
      }
    }
    return patternCache[cacheKey];
  }
  return null;
}, "getPattern");
var tryDecode = /* @__PURE__ */ __name((str, decoder) => {
  try {
    return decoder(str);
  } catch {
    return str.replace(/(?:%[0-9A-Fa-f]{2})+/g, (match3) => {
      try {
        return decoder(match3);
      } catch {
        return match3;
      }
    });
  }
}, "tryDecode");
var tryDecodeURI = /* @__PURE__ */ __name((str) => tryDecode(str, decodeURI), "tryDecodeURI");
var getPath = /* @__PURE__ */ __name((request) => {
  const url = request.url;
  const start = url.indexOf("/", url.indexOf(":") + 4);
  let i = start;
  for (; i < url.length; i++) {
    const charCode = url.charCodeAt(i);
    if (charCode === 37) {
      const queryIndex = url.indexOf("?", i);
      const hashIndex = url.indexOf("#", i);
      const end = queryIndex === -1 ? hashIndex === -1 ? void 0 : hashIndex : hashIndex === -1 ? queryIndex : Math.min(queryIndex, hashIndex);
      const path = url.slice(start, end);
      return tryDecodeURI(path.includes("%25") ? path.replace(/%25/g, "%2525") : path);
    } else if (charCode === 63 || charCode === 35) {
      break;
    }
  }
  return url.slice(start, i);
}, "getPath");
var getPathNoStrict = /* @__PURE__ */ __name((request) => {
  const result = getPath(request);
  return result.length > 1 && result.at(-1) === "/" ? result.slice(0, -1) : result;
}, "getPathNoStrict");
var mergePath = /* @__PURE__ */ __name((base, sub, ...rest) => {
  if (rest.length) {
    sub = mergePath(sub, ...rest);
  }
  return `${base?.[0] === "/" ? "" : "/"}${base}${sub === "/" ? "" : `${base?.at(-1) === "/" ? "" : "/"}${sub?.[0] === "/" ? sub.slice(1) : sub}`}`;
}, "mergePath");
var checkOptionalParameter = /* @__PURE__ */ __name((path) => {
  if (path.charCodeAt(path.length - 1) !== 63 || !path.includes(":")) {
    return null;
  }
  const segments = path.split("/");
  const results = [];
  let basePath = "";
  segments.forEach((segment) => {
    if (segment !== "" && !/\:/.test(segment)) {
      basePath += "/" + segment;
    } else if (/\:/.test(segment)) {
      if (/\?/.test(segment)) {
        if (results.length === 0 && basePath === "") {
          results.push("/");
        } else {
          results.push(basePath);
        }
        const optionalSegment = segment.replace("?", "");
        basePath += "/" + optionalSegment;
        results.push(basePath);
      } else {
        basePath += "/" + segment;
      }
    }
  });
  return results.filter((v, i, a) => a.indexOf(v) === i);
}, "checkOptionalParameter");
var _decodeURI = /* @__PURE__ */ __name((value) => {
  if (!/[%+]/.test(value)) {
    return value;
  }
  if (value.indexOf("+") !== -1) {
    value = value.replace(/\+/g, " ");
  }
  return value.indexOf("%") !== -1 ? tryDecode(value, decodeURIComponent_) : value;
}, "_decodeURI");
var _getQueryParam = /* @__PURE__ */ __name((url, key, multiple) => {
  let encoded;
  if (!multiple && key && !/[%+]/.test(key)) {
    let keyIndex2 = url.indexOf("?", 8);
    if (keyIndex2 === -1) {
      return void 0;
    }
    if (!url.startsWith(key, keyIndex2 + 1)) {
      keyIndex2 = url.indexOf(`&${key}`, keyIndex2 + 1);
    }
    while (keyIndex2 !== -1) {
      const trailingKeyCode = url.charCodeAt(keyIndex2 + key.length + 1);
      if (trailingKeyCode === 61) {
        const valueIndex = keyIndex2 + key.length + 2;
        const endIndex = url.indexOf("&", valueIndex);
        return _decodeURI(url.slice(valueIndex, endIndex === -1 ? void 0 : endIndex));
      } else if (trailingKeyCode == 38 || isNaN(trailingKeyCode)) {
        return "";
      }
      keyIndex2 = url.indexOf(`&${key}`, keyIndex2 + 1);
    }
    encoded = /[%+]/.test(url);
    if (!encoded) {
      return void 0;
    }
  }
  const results = {};
  encoded ??= /[%+]/.test(url);
  let keyIndex = url.indexOf("?", 8);
  while (keyIndex !== -1) {
    const nextKeyIndex = url.indexOf("&", keyIndex + 1);
    let valueIndex = url.indexOf("=", keyIndex);
    if (valueIndex > nextKeyIndex && nextKeyIndex !== -1) {
      valueIndex = -1;
    }
    let name = url.slice(
      keyIndex + 1,
      valueIndex === -1 ? nextKeyIndex === -1 ? void 0 : nextKeyIndex : valueIndex
    );
    if (encoded) {
      name = _decodeURI(name);
    }
    keyIndex = nextKeyIndex;
    if (name === "") {
      continue;
    }
    let value;
    if (valueIndex === -1) {
      value = "";
    } else {
      value = url.slice(valueIndex + 1, nextKeyIndex === -1 ? void 0 : nextKeyIndex);
      if (encoded) {
        value = _decodeURI(value);
      }
    }
    if (multiple) {
      if (!(results[name] && Array.isArray(results[name]))) {
        results[name] = [];
      }
      ;
      results[name].push(value);
    } else {
      results[name] ??= value;
    }
  }
  return key ? results[key] : results;
}, "_getQueryParam");
var getQueryParam = _getQueryParam;
var getQueryParams = /* @__PURE__ */ __name((url, key) => {
  return _getQueryParam(url, key, true);
}, "getQueryParams");
var decodeURIComponent_ = decodeURIComponent;

// node_modules/hono/dist/request.js
var tryDecodeURIComponent = /* @__PURE__ */ __name((str) => tryDecode(str, decodeURIComponent_), "tryDecodeURIComponent");
var HonoRequest = class {
  static {
    __name(this, "HonoRequest");
  }
  /**
   * `.raw` can get the raw Request object.
   *
   * @see {@link https://hono.dev/docs/api/request#raw}
   *
   * @example
   * ```ts
   * // For Cloudflare Workers
   * app.post('/', async (c) => {
   *   const metadata = c.req.raw.cf?.hostMetadata?
   *   ...
   * })
   * ```
   */
  raw;
  #validatedData;
  // Short name of validatedData
  #matchResult;
  routeIndex = 0;
  /**
   * `.path` can get the pathname of the request.
   *
   * @see {@link https://hono.dev/docs/api/request#path}
   *
   * @example
   * ```ts
   * app.get('/about/me', (c) => {
   *   const pathname = c.req.path // `/about/me`
   * })
   * ```
   */
  path;
  bodyCache = {};
  constructor(request, path = "/", matchResult = [[]]) {
    this.raw = request;
    this.path = path;
    this.#matchResult = matchResult;
    this.#validatedData = {};
  }
  param(key) {
    return key ? this.#getDecodedParam(key) : this.#getAllDecodedParams();
  }
  #getDecodedParam(key) {
    const paramKey = this.#matchResult[0][this.routeIndex][1][key];
    const param = this.#getParamValue(paramKey);
    return param && /\%/.test(param) ? tryDecodeURIComponent(param) : param;
  }
  #getAllDecodedParams() {
    const decoded = {};
    const keys = Object.keys(this.#matchResult[0][this.routeIndex][1]);
    for (const key of keys) {
      const value = this.#getParamValue(this.#matchResult[0][this.routeIndex][1][key]);
      if (value !== void 0) {
        decoded[key] = /\%/.test(value) ? tryDecodeURIComponent(value) : value;
      }
    }
    return decoded;
  }
  #getParamValue(paramKey) {
    return this.#matchResult[1] ? this.#matchResult[1][paramKey] : paramKey;
  }
  query(key) {
    return getQueryParam(this.url, key);
  }
  queries(key) {
    return getQueryParams(this.url, key);
  }
  header(name) {
    if (name) {
      return this.raw.headers.get(name) ?? void 0;
    }
    const headerData = {};
    this.raw.headers.forEach((value, key) => {
      headerData[key] = value;
    });
    return headerData;
  }
  async parseBody(options) {
    return this.bodyCache.parsedBody ??= await parseBody(this, options);
  }
  #cachedBody = /* @__PURE__ */ __name((key) => {
    const { bodyCache, raw: raw2 } = this;
    const cachedBody = bodyCache[key];
    if (cachedBody) {
      return cachedBody;
    }
    const anyCachedKey = Object.keys(bodyCache)[0];
    if (anyCachedKey) {
      return bodyCache[anyCachedKey].then((body) => {
        if (anyCachedKey === "json") {
          body = JSON.stringify(body);
        }
        return new Response(body)[key]();
      });
    }
    return bodyCache[key] = raw2[key]();
  }, "#cachedBody");
  /**
   * `.json()` can parse Request body of type `application/json`
   *
   * @see {@link https://hono.dev/docs/api/request#json}
   *
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.json()
   * })
   * ```
   */
  json() {
    return this.#cachedBody("text").then((text) => JSON.parse(text));
  }
  /**
   * `.text()` can parse Request body of type `text/plain`
   *
   * @see {@link https://hono.dev/docs/api/request#text}
   *
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.text()
   * })
   * ```
   */
  text() {
    return this.#cachedBody("text");
  }
  /**
   * `.arrayBuffer()` parse Request body as an `ArrayBuffer`
   *
   * @see {@link https://hono.dev/docs/api/request#arraybuffer}
   *
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.arrayBuffer()
   * })
   * ```
   */
  arrayBuffer() {
    return this.#cachedBody("arrayBuffer");
  }
  /**
   * Parses the request body as a `Blob`.
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.blob();
   * });
   * ```
   * @see https://hono.dev/docs/api/request#blob
   */
  blob() {
    return this.#cachedBody("blob");
  }
  /**
   * Parses the request body as `FormData`.
   * @example
   * ```ts
   * app.post('/entry', async (c) => {
   *   const body = await c.req.formData();
   * });
   * ```
   * @see https://hono.dev/docs/api/request#formdata
   */
  formData() {
    return this.#cachedBody("formData");
  }
  /**
   * Adds validated data to the request.
   *
   * @param target - The target of the validation.
   * @param data - The validated data to add.
   */
  addValidatedData(target, data) {
    this.#validatedData[target] = data;
  }
  valid(target) {
    return this.#validatedData[target];
  }
  /**
   * `.url()` can get the request url strings.
   *
   * @see {@link https://hono.dev/docs/api/request#url}
   *
   * @example
   * ```ts
   * app.get('/about/me', (c) => {
   *   const url = c.req.url // `http://localhost:8787/about/me`
   *   ...
   * })
   * ```
   */
  get url() {
    return this.raw.url;
  }
  /**
   * `.method()` can get the method name of the request.
   *
   * @see {@link https://hono.dev/docs/api/request#method}
   *
   * @example
   * ```ts
   * app.get('/about/me', (c) => {
   *   const method = c.req.method // `GET`
   * })
   * ```
   */
  get method() {
    return this.raw.method;
  }
  get [GET_MATCH_RESULT]() {
    return this.#matchResult;
  }
  /**
   * `.matchedRoutes()` can return a matched route in the handler
   *
   * @deprecated
   *
   * Use matchedRoutes helper defined in "hono/route" instead.
   *
   * @see {@link https://hono.dev/docs/api/request#matchedroutes}
   *
   * @example
   * ```ts
   * app.use('*', async function logger(c, next) {
   *   await next()
   *   c.req.matchedRoutes.forEach(({ handler, method, path }, i) => {
   *     const name = handler.name || (handler.length < 2 ? '[handler]' : '[middleware]')
   *     console.log(
   *       method,
   *       ' ',
   *       path,
   *       ' '.repeat(Math.max(10 - path.length, 0)),
   *       name,
   *       i === c.req.routeIndex ? '<- respond from here' : ''
   *     )
   *   })
   * })
   * ```
   */
  get matchedRoutes() {
    return this.#matchResult[0].map(([[, route]]) => route);
  }
  /**
   * `routePath()` can retrieve the path registered within the handler
   *
   * @deprecated
   *
   * Use routePath helper defined in "hono/route" instead.
   *
   * @see {@link https://hono.dev/docs/api/request#routepath}
   *
   * @example
   * ```ts
   * app.get('/posts/:id', (c) => {
   *   return c.json({ path: c.req.routePath })
   * })
   * ```
   */
  get routePath() {
    return this.#matchResult[0].map(([[, route]]) => route)[this.routeIndex].path;
  }
};

// node_modules/hono/dist/utils/html.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var HtmlEscapedCallbackPhase = {
  Stringify: 1,
  BeforeStream: 2,
  Stream: 3
};
var raw = /* @__PURE__ */ __name((value, callbacks) => {
  const escapedString = new String(value);
  escapedString.isEscaped = true;
  escapedString.callbacks = callbacks;
  return escapedString;
}, "raw");
var resolveCallback = /* @__PURE__ */ __name(async (str, phase, preserveCallbacks, context2, buffer) => {
  if (typeof str === "object" && !(str instanceof String)) {
    if (!(str instanceof Promise)) {
      str = str.toString();
    }
    if (str instanceof Promise) {
      str = await str;
    }
  }
  const callbacks = str.callbacks;
  if (!callbacks?.length) {
    return Promise.resolve(str);
  }
  if (buffer) {
    buffer[0] += str;
  } else {
    buffer = [str];
  }
  const resStr = Promise.all(callbacks.map((c) => c({ phase, buffer, context: context2 }))).then(
    (res) => Promise.all(
      res.filter(Boolean).map((str2) => resolveCallback(str2, phase, false, context2, buffer))
    ).then(() => buffer[0])
  );
  if (preserveCallbacks) {
    return raw(await resStr, callbacks);
  } else {
    return resStr;
  }
}, "resolveCallback");

// node_modules/hono/dist/context.js
var TEXT_PLAIN = "text/plain; charset=UTF-8";
var setDefaultContentType = /* @__PURE__ */ __name((contentType, headers) => {
  return {
    "Content-Type": contentType,
    ...headers
  };
}, "setDefaultContentType");
var createResponseInstance = /* @__PURE__ */ __name((body, init) => new Response(body, init), "createResponseInstance");
var Context = class {
  static {
    __name(this, "Context");
  }
  #rawRequest;
  #req;
  /**
   * `.env` can get bindings (environment variables, secrets, KV namespaces, D1 database, R2 bucket etc.) in Cloudflare Workers.
   *
   * @see {@link https://hono.dev/docs/api/context#env}
   *
   * @example
   * ```ts
   * // Environment object for Cloudflare Workers
   * app.get('*', async c => {
   *   const counter = c.env.COUNTER
   * })
   * ```
   */
  env = {};
  #var;
  finalized = false;
  /**
   * `.error` can get the error object from the middleware if the Handler throws an error.
   *
   * @see {@link https://hono.dev/docs/api/context#error}
   *
   * @example
   * ```ts
   * app.use('*', async (c, next) => {
   *   await next()
   *   if (c.error) {
   *     // do something...
   *   }
   * })
   * ```
   */
  error;
  #status;
  #executionCtx;
  #res;
  #layout;
  #renderer;
  #notFoundHandler;
  #preparedHeaders;
  #matchResult;
  #path;
  /**
   * Creates an instance of the Context class.
   *
   * @param req - The Request object.
   * @param options - Optional configuration options for the context.
   */
  constructor(req, options) {
    this.#rawRequest = req;
    if (options) {
      this.#executionCtx = options.executionCtx;
      this.env = options.env;
      this.#notFoundHandler = options.notFoundHandler;
      this.#path = options.path;
      this.#matchResult = options.matchResult;
    }
  }
  /**
   * `.req` is the instance of {@link HonoRequest}.
   */
  get req() {
    this.#req ??= new HonoRequest(this.#rawRequest, this.#path, this.#matchResult);
    return this.#req;
  }
  /**
   * @see {@link https://hono.dev/docs/api/context#event}
   * The FetchEvent associated with the current request.
   *
   * @throws Will throw an error if the context does not have a FetchEvent.
   */
  get event() {
    if (this.#executionCtx && "respondWith" in this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no FetchEvent");
    }
  }
  /**
   * @see {@link https://hono.dev/docs/api/context#executionctx}
   * The ExecutionContext associated with the current request.
   *
   * @throws Will throw an error if the context does not have an ExecutionContext.
   */
  get executionCtx() {
    if (this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no ExecutionContext");
    }
  }
  /**
   * @see {@link https://hono.dev/docs/api/context#res}
   * The Response object for the current request.
   */
  get res() {
    return this.#res ||= createResponseInstance(null, {
      headers: this.#preparedHeaders ??= new Headers()
    });
  }
  /**
   * Sets the Response object for the current request.
   *
   * @param _res - The Response object to set.
   */
  set res(_res) {
    if (this.#res && _res) {
      _res = createResponseInstance(_res.body, _res);
      for (const [k, v] of this.#res.headers.entries()) {
        if (k === "content-type") {
          continue;
        }
        if (k === "set-cookie") {
          const cookies = this.#res.headers.getSetCookie();
          _res.headers.delete("set-cookie");
          for (const cookie of cookies) {
            _res.headers.append("set-cookie", cookie);
          }
        } else {
          _res.headers.set(k, v);
        }
      }
    }
    this.#res = _res;
    this.finalized = true;
  }
  /**
   * `.render()` can create a response within a layout.
   *
   * @see {@link https://hono.dev/docs/api/context#render-setrenderer}
   *
   * @example
   * ```ts
   * app.get('/', (c) => {
   *   return c.render('Hello!')
   * })
   * ```
   */
  render = /* @__PURE__ */ __name((...args) => {
    this.#renderer ??= (content) => this.html(content);
    return this.#renderer(...args);
  }, "render");
  /**
   * Sets the layout for the response.
   *
   * @param layout - The layout to set.
   * @returns The layout function.
   */
  setLayout = /* @__PURE__ */ __name((layout) => this.#layout = layout, "setLayout");
  /**
   * Gets the current layout for the response.
   *
   * @returns The current layout function.
   */
  getLayout = /* @__PURE__ */ __name(() => this.#layout, "getLayout");
  /**
   * `.setRenderer()` can set the layout in the custom middleware.
   *
   * @see {@link https://hono.dev/docs/api/context#render-setrenderer}
   *
   * @example
   * ```tsx
   * app.use('*', async (c, next) => {
   *   c.setRenderer((content) => {
   *     return c.html(
   *       <html>
   *         <body>
   *           <p>{content}</p>
   *         </body>
   *       </html>
   *     )
   *   })
   *   await next()
   * })
   * ```
   */
  setRenderer = /* @__PURE__ */ __name((renderer) => {
    this.#renderer = renderer;
  }, "setRenderer");
  /**
   * `.header()` can set headers.
   *
   * @see {@link https://hono.dev/docs/api/context#header}
   *
   * @example
   * ```ts
   * app.get('/welcome', (c) => {
   *   // Set headers
   *   c.header('X-Message', 'Hello!')
   *   c.header('Content-Type', 'text/plain')
   *
   *   return c.body('Thank you for coming')
   * })
   * ```
   */
  header = /* @__PURE__ */ __name((name, value, options) => {
    if (this.finalized) {
      this.#res = createResponseInstance(this.#res.body, this.#res);
    }
    const headers = this.#res ? this.#res.headers : this.#preparedHeaders ??= new Headers();
    if (value === void 0) {
      headers.delete(name);
    } else if (options?.append) {
      headers.append(name, value);
    } else {
      headers.set(name, value);
    }
  }, "header");
  status = /* @__PURE__ */ __name((status) => {
    this.#status = status;
  }, "status");
  /**
   * `.set()` can set the value specified by the key.
   *
   * @see {@link https://hono.dev/docs/api/context#set-get}
   *
   * @example
   * ```ts
   * app.use('*', async (c, next) => {
   *   c.set('message', 'Hono is hot!!')
   *   await next()
   * })
   * ```
   */
  set = /* @__PURE__ */ __name((key, value) => {
    this.#var ??= /* @__PURE__ */ new Map();
    this.#var.set(key, value);
  }, "set");
  /**
   * `.get()` can use the value specified by the key.
   *
   * @see {@link https://hono.dev/docs/api/context#set-get}
   *
   * @example
   * ```ts
   * app.get('/', (c) => {
   *   const message = c.get('message')
   *   return c.text(`The message is "${message}"`)
   * })
   * ```
   */
  get = /* @__PURE__ */ __name((key) => {
    return this.#var ? this.#var.get(key) : void 0;
  }, "get");
  /**
   * `.var` can access the value of a variable.
   *
   * @see {@link https://hono.dev/docs/api/context#var}
   *
   * @example
   * ```ts
   * const result = c.var.client.oneMethod()
   * ```
   */
  // c.var.propName is a read-only
  get var() {
    if (!this.#var) {
      return {};
    }
    return Object.fromEntries(this.#var);
  }
  #newResponse(data, arg, headers) {
    const responseHeaders = this.#res ? new Headers(this.#res.headers) : this.#preparedHeaders ?? new Headers();
    if (typeof arg === "object" && "headers" in arg) {
      const argHeaders = arg.headers instanceof Headers ? arg.headers : new Headers(arg.headers);
      for (const [key, value] of argHeaders) {
        if (key.toLowerCase() === "set-cookie") {
          responseHeaders.append(key, value);
        } else {
          responseHeaders.set(key, value);
        }
      }
    }
    if (headers) {
      for (const [k, v] of Object.entries(headers)) {
        if (typeof v === "string") {
          responseHeaders.set(k, v);
        } else {
          responseHeaders.delete(k);
          for (const v2 of v) {
            responseHeaders.append(k, v2);
          }
        }
      }
    }
    const status = typeof arg === "number" ? arg : arg?.status ?? this.#status;
    return createResponseInstance(data, { status, headers: responseHeaders });
  }
  newResponse = /* @__PURE__ */ __name((...args) => this.#newResponse(...args), "newResponse");
  /**
   * `.body()` can return the HTTP response.
   * You can set headers with `.header()` and set HTTP status code with `.status`.
   * This can also be set in `.text()`, `.json()` and so on.
   *
   * @see {@link https://hono.dev/docs/api/context#body}
   *
   * @example
   * ```ts
   * app.get('/welcome', (c) => {
   *   // Set headers
   *   c.header('X-Message', 'Hello!')
   *   c.header('Content-Type', 'text/plain')
   *   // Set HTTP status code
   *   c.status(201)
   *
   *   // Return the response body
   *   return c.body('Thank you for coming')
   * })
   * ```
   */
  body = /* @__PURE__ */ __name((data, arg, headers) => this.#newResponse(data, arg, headers), "body");
  /**
   * `.text()` can render text as `Content-Type:text/plain`.
   *
   * @see {@link https://hono.dev/docs/api/context#text}
   *
   * @example
   * ```ts
   * app.get('/say', (c) => {
   *   return c.text('Hello!')
   * })
   * ```
   */
  text = /* @__PURE__ */ __name((text, arg, headers) => {
    return !this.#preparedHeaders && !this.#status && !arg && !headers && !this.finalized ? new Response(text) : this.#newResponse(
      text,
      arg,
      setDefaultContentType(TEXT_PLAIN, headers)
    );
  }, "text");
  /**
   * `.json()` can render JSON as `Content-Type:application/json`.
   *
   * @see {@link https://hono.dev/docs/api/context#json}
   *
   * @example
   * ```ts
   * app.get('/api', (c) => {
   *   return c.json({ message: 'Hello!' })
   * })
   * ```
   */
  json = /* @__PURE__ */ __name((object, arg, headers) => {
    return this.#newResponse(
      JSON.stringify(object),
      arg,
      setDefaultContentType("application/json", headers)
    );
  }, "json");
  html = /* @__PURE__ */ __name((html, arg, headers) => {
    const res = /* @__PURE__ */ __name((html2) => this.#newResponse(html2, arg, setDefaultContentType("text/html; charset=UTF-8", headers)), "res");
    return typeof html === "object" ? resolveCallback(html, HtmlEscapedCallbackPhase.Stringify, false, {}).then(res) : res(html);
  }, "html");
  /**
   * `.redirect()` can Redirect, default status code is 302.
   *
   * @see {@link https://hono.dev/docs/api/context#redirect}
   *
   * @example
   * ```ts
   * app.get('/redirect', (c) => {
   *   return c.redirect('/')
   * })
   * app.get('/redirect-permanently', (c) => {
   *   return c.redirect('/', 301)
   * })
   * ```
   */
  redirect = /* @__PURE__ */ __name((location, status) => {
    const locationString = String(location);
    this.header(
      "Location",
      // Multibyes should be encoded
      // eslint-disable-next-line no-control-regex
      !/[^\x00-\xFF]/.test(locationString) ? locationString : encodeURI(locationString)
    );
    return this.newResponse(null, status ?? 302);
  }, "redirect");
  /**
   * `.notFound()` can return the Not Found Response.
   *
   * @see {@link https://hono.dev/docs/api/context#notfound}
   *
   * @example
   * ```ts
   * app.get('/notfound', (c) => {
   *   return c.notFound()
   * })
   * ```
   */
  notFound = /* @__PURE__ */ __name(() => {
    this.#notFoundHandler ??= () => createResponseInstance();
    return this.#notFoundHandler(this);
  }, "notFound");
};

// node_modules/hono/dist/router.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var METHOD_NAME_ALL = "ALL";
var METHOD_NAME_ALL_LOWERCASE = "all";
var METHODS = ["get", "post", "put", "delete", "options", "patch"];
var MESSAGE_MATCHER_IS_ALREADY_BUILT = "Can not add a route since the matcher is already built.";
var UnsupportedPathError = class extends Error {
  static {
    __name(this, "UnsupportedPathError");
  }
};

// node_modules/hono/dist/utils/constants.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var COMPOSED_HANDLER = "__COMPOSED_HANDLER";

// node_modules/hono/dist/hono-base.js
var notFoundHandler = /* @__PURE__ */ __name((c) => {
  return c.text("404 Not Found", 404);
}, "notFoundHandler");
var errorHandler = /* @__PURE__ */ __name((err, c) => {
  if ("getResponse" in err) {
    const res = err.getResponse();
    return c.newResponse(res.body, res);
  }
  console.error(err);
  return c.text("Internal Server Error", 500);
}, "errorHandler");
var Hono = class _Hono {
  static {
    __name(this, "_Hono");
  }
  get;
  post;
  put;
  delete;
  options;
  patch;
  all;
  on;
  use;
  /*
    This class is like an abstract class and does not have a router.
    To use it, inherit the class and implement router in the constructor.
  */
  router;
  getPath;
  // Cannot use `#` because it requires visibility at JavaScript runtime.
  _basePath = "/";
  #path = "/";
  routes = [];
  constructor(options = {}) {
    const allMethods = [...METHODS, METHOD_NAME_ALL_LOWERCASE];
    allMethods.forEach((method) => {
      this[method] = (args1, ...args) => {
        if (typeof args1 === "string") {
          this.#path = args1;
        } else {
          this.#addRoute(method, this.#path, args1);
        }
        args.forEach((handler) => {
          this.#addRoute(method, this.#path, handler);
        });
        return this;
      };
    });
    this.on = (method, path, ...handlers) => {
      for (const p of [path].flat()) {
        this.#path = p;
        for (const m of [method].flat()) {
          handlers.map((handler) => {
            this.#addRoute(m.toUpperCase(), this.#path, handler);
          });
        }
      }
      return this;
    };
    this.use = (arg1, ...handlers) => {
      if (typeof arg1 === "string") {
        this.#path = arg1;
      } else {
        this.#path = "*";
        handlers.unshift(arg1);
      }
      handlers.forEach((handler) => {
        this.#addRoute(METHOD_NAME_ALL, this.#path, handler);
      });
      return this;
    };
    const { strict, ...optionsWithoutStrict } = options;
    Object.assign(this, optionsWithoutStrict);
    this.getPath = strict ?? true ? options.getPath ?? getPath : getPathNoStrict;
  }
  #clone() {
    const clone = new _Hono({
      router: this.router,
      getPath: this.getPath
    });
    clone.errorHandler = this.errorHandler;
    clone.#notFoundHandler = this.#notFoundHandler;
    clone.routes = this.routes;
    return clone;
  }
  #notFoundHandler = notFoundHandler;
  // Cannot use `#` because it requires visibility at JavaScript runtime.
  errorHandler = errorHandler;
  /**
   * `.route()` allows grouping other Hono instance in routes.
   *
   * @see {@link https://hono.dev/docs/api/routing#grouping}
   *
   * @param {string} path - base Path
   * @param {Hono} app - other Hono instance
   * @returns {Hono} routed Hono instance
   *
   * @example
   * ```ts
   * const app = new Hono()
   * const app2 = new Hono()
   *
   * app2.get("/user", (c) => c.text("user"))
   * app.route("/api", app2) // GET /api/user
   * ```
   */
  route(path, app2) {
    const subApp = this.basePath(path);
    app2.routes.map((r) => {
      let handler;
      if (app2.errorHandler === errorHandler) {
        handler = r.handler;
      } else {
        handler = /* @__PURE__ */ __name(async (c, next) => (await compose([], app2.errorHandler)(c, () => r.handler(c, next))).res, "handler");
        handler[COMPOSED_HANDLER] = r.handler;
      }
      subApp.#addRoute(r.method, r.path, handler);
    });
    return this;
  }
  /**
   * `.basePath()` allows base paths to be specified.
   *
   * @see {@link https://hono.dev/docs/api/routing#base-path}
   *
   * @param {string} path - base Path
   * @returns {Hono} changed Hono instance
   *
   * @example
   * ```ts
   * const api = new Hono().basePath('/api')
   * ```
   */
  basePath(path) {
    const subApp = this.#clone();
    subApp._basePath = mergePath(this._basePath, path);
    return subApp;
  }
  /**
   * `.onError()` handles an error and returns a customized Response.
   *
   * @see {@link https://hono.dev/docs/api/hono#error-handling}
   *
   * @param {ErrorHandler} handler - request Handler for error
   * @returns {Hono} changed Hono instance
   *
   * @example
   * ```ts
   * app.onError((err, c) => {
   *   console.error(`${err}`)
   *   return c.text('Custom Error Message', 500)
   * })
   * ```
   */
  onError = /* @__PURE__ */ __name((handler) => {
    this.errorHandler = handler;
    return this;
  }, "onError");
  /**
   * `.notFound()` allows you to customize a Not Found Response.
   *
   * @see {@link https://hono.dev/docs/api/hono#not-found}
   *
   * @param {NotFoundHandler} handler - request handler for not-found
   * @returns {Hono} changed Hono instance
   *
   * @example
   * ```ts
   * app.notFound((c) => {
   *   return c.text('Custom 404 Message', 404)
   * })
   * ```
   */
  notFound = /* @__PURE__ */ __name((handler) => {
    this.#notFoundHandler = handler;
    return this;
  }, "notFound");
  /**
   * `.mount()` allows you to mount applications built with other frameworks into your Hono application.
   *
   * @see {@link https://hono.dev/docs/api/hono#mount}
   *
   * @param {string} path - base Path
   * @param {Function} applicationHandler - other Request Handler
   * @param {MountOptions} [options] - options of `.mount()`
   * @returns {Hono} mounted Hono instance
   *
   * @example
   * ```ts
   * import { Router as IttyRouter } from 'itty-router'
   * import { Hono } from 'hono'
   * // Create itty-router application
   * const ittyRouter = IttyRouter()
   * // GET /itty-router/hello
   * ittyRouter.get('/hello', () => new Response('Hello from itty-router'))
   *
   * const app = new Hono()
   * app.mount('/itty-router', ittyRouter.handle)
   * ```
   *
   * @example
   * ```ts
   * const app = new Hono()
   * // Send the request to another application without modification.
   * app.mount('/app', anotherApp, {
   *   replaceRequest: (req) => req,
   * })
   * ```
   */
  mount(path, applicationHandler, options) {
    let replaceRequest;
    let optionHandler;
    if (options) {
      if (typeof options === "function") {
        optionHandler = options;
      } else {
        optionHandler = options.optionHandler;
        if (options.replaceRequest === false) {
          replaceRequest = /* @__PURE__ */ __name((request) => request, "replaceRequest");
        } else {
          replaceRequest = options.replaceRequest;
        }
      }
    }
    const getOptions = optionHandler ? (c) => {
      const options2 = optionHandler(c);
      return Array.isArray(options2) ? options2 : [options2];
    } : (c) => {
      let executionContext = void 0;
      try {
        executionContext = c.executionCtx;
      } catch {
      }
      return [c.env, executionContext];
    };
    replaceRequest ||= (() => {
      const mergedPath = mergePath(this._basePath, path);
      const pathPrefixLength = mergedPath === "/" ? 0 : mergedPath.length;
      return (request) => {
        const url = new URL(request.url);
        url.pathname = url.pathname.slice(pathPrefixLength) || "/";
        return new Request(url, request);
      };
    })();
    const handler = /* @__PURE__ */ __name(async (c, next) => {
      const res = await applicationHandler(replaceRequest(c.req.raw), ...getOptions(c));
      if (res) {
        return res;
      }
      await next();
    }, "handler");
    this.#addRoute(METHOD_NAME_ALL, mergePath(path, "*"), handler);
    return this;
  }
  #addRoute(method, path, handler) {
    method = method.toUpperCase();
    path = mergePath(this._basePath, path);
    const r = { basePath: this._basePath, path, method, handler };
    this.router.add(method, path, [handler, r]);
    this.routes.push(r);
  }
  #handleError(err, c) {
    if (err instanceof Error) {
      return this.errorHandler(err, c);
    }
    throw err;
  }
  #dispatch(request, executionCtx, env2, method) {
    if (method === "HEAD") {
      return (async () => new Response(null, await this.#dispatch(request, executionCtx, env2, "GET")))();
    }
    const path = this.getPath(request, { env: env2 });
    const matchResult = this.router.match(method, path);
    const c = new Context(request, {
      path,
      matchResult,
      env: env2,
      executionCtx,
      notFoundHandler: this.#notFoundHandler
    });
    if (matchResult[0].length === 1) {
      let res;
      try {
        res = matchResult[0][0][0][0](c, async () => {
          c.res = await this.#notFoundHandler(c);
        });
      } catch (err) {
        return this.#handleError(err, c);
      }
      return res instanceof Promise ? res.then(
        (resolved) => resolved || (c.finalized ? c.res : this.#notFoundHandler(c))
      ).catch((err) => this.#handleError(err, c)) : res ?? this.#notFoundHandler(c);
    }
    const composed = compose(matchResult[0], this.errorHandler, this.#notFoundHandler);
    return (async () => {
      try {
        const context2 = await composed(c);
        if (!context2.finalized) {
          throw new Error(
            "Context is not finalized. Did you forget to return a Response object or `await next()`?"
          );
        }
        return context2.res;
      } catch (err) {
        return this.#handleError(err, c);
      }
    })();
  }
  /**
   * `.fetch()` will be entry point of your app.
   *
   * @see {@link https://hono.dev/docs/api/hono#fetch}
   *
   * @param {Request} request - request Object of request
   * @param {Env} Env - env Object
   * @param {ExecutionContext} - context of execution
   * @returns {Response | Promise<Response>} response of request
   *
   */
  fetch = /* @__PURE__ */ __name((request, ...rest) => {
    return this.#dispatch(request, rest[1], rest[0], request.method);
  }, "fetch");
  /**
   * `.request()` is a useful method for testing.
   * You can pass a URL or pathname to send a GET request.
   * app will return a Response object.
   * ```ts
   * test('GET /hello is ok', async () => {
   *   const res = await app.request('/hello')
   *   expect(res.status).toBe(200)
   * })
   * ```
   * @see https://hono.dev/docs/api/hono#request
   */
  request = /* @__PURE__ */ __name((input, requestInit, Env, executionCtx) => {
    if (input instanceof Request) {
      return this.fetch(requestInit ? new Request(input, requestInit) : input, Env, executionCtx);
    }
    input = input.toString();
    return this.fetch(
      new Request(
        /^https?:\/\//.test(input) ? input : `http://localhost${mergePath("/", input)}`,
        requestInit
      ),
      Env,
      executionCtx
    );
  }, "request");
  /**
   * `.fire()` automatically adds a global fetch event listener.
   * This can be useful for environments that adhere to the Service Worker API, such as non-ES module Cloudflare Workers.
   * @deprecated
   * Use `fire` from `hono/service-worker` instead.
   * ```ts
   * import { Hono } from 'hono'
   * import { fire } from 'hono/service-worker'
   *
   * const app = new Hono()
   * // ...
   * fire(app)
   * ```
   * @see https://hono.dev/docs/api/hono#fire
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API
   * @see https://developers.cloudflare.com/workers/reference/migrate-to-module-workers/
   */
  fire = /* @__PURE__ */ __name(() => {
    addEventListener("fetch", (event) => {
      event.respondWith(this.#dispatch(event.request, event, void 0, event.request.method));
    });
  }, "fire");
};

// node_modules/hono/dist/router/reg-exp-router/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/hono/dist/router/reg-exp-router/router.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/hono/dist/router/reg-exp-router/matcher.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var emptyParam = [];
function match(method, path) {
  const matchers = this.buildAllMatchers();
  const match22 = /* @__PURE__ */ __name(((method2, path2) => {
    const matcher = matchers[method2] || matchers[METHOD_NAME_ALL];
    const staticMatch = matcher[2][path2];
    if (staticMatch) {
      return staticMatch;
    }
    const match3 = path2.match(matcher[0]);
    if (!match3) {
      return [[], emptyParam];
    }
    const index = match3.indexOf("", 1);
    return [matcher[1][index], match3];
  }), "match2");
  this.match = match22;
  return match22(method, path);
}
__name(match, "match");

// node_modules/hono/dist/router/reg-exp-router/node.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var LABEL_REG_EXP_STR = "[^/]+";
var ONLY_WILDCARD_REG_EXP_STR = ".*";
var TAIL_WILDCARD_REG_EXP_STR = "(?:|/.*)";
var PATH_ERROR = /* @__PURE__ */ Symbol();
var regExpMetaChars = new Set(".\\+*[^]$()");
function compareKey(a, b) {
  if (a.length === 1) {
    return b.length === 1 ? a < b ? -1 : 1 : -1;
  }
  if (b.length === 1) {
    return 1;
  }
  if (a === ONLY_WILDCARD_REG_EXP_STR || a === TAIL_WILDCARD_REG_EXP_STR) {
    return 1;
  } else if (b === ONLY_WILDCARD_REG_EXP_STR || b === TAIL_WILDCARD_REG_EXP_STR) {
    return -1;
  }
  if (a === LABEL_REG_EXP_STR) {
    return 1;
  } else if (b === LABEL_REG_EXP_STR) {
    return -1;
  }
  return a.length === b.length ? a < b ? -1 : 1 : b.length - a.length;
}
__name(compareKey, "compareKey");
var Node = class _Node {
  static {
    __name(this, "_Node");
  }
  #index;
  #varIndex;
  #children = /* @__PURE__ */ Object.create(null);
  insert(tokens, index, paramMap, context2, pathErrorCheckOnly) {
    if (tokens.length === 0) {
      if (this.#index !== void 0) {
        throw PATH_ERROR;
      }
      if (pathErrorCheckOnly) {
        return;
      }
      this.#index = index;
      return;
    }
    const [token, ...restTokens] = tokens;
    const pattern = token === "*" ? restTokens.length === 0 ? ["", "", ONLY_WILDCARD_REG_EXP_STR] : ["", "", LABEL_REG_EXP_STR] : token === "/*" ? ["", "", TAIL_WILDCARD_REG_EXP_STR] : token.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
    let node;
    if (pattern) {
      const name = pattern[1];
      let regexpStr = pattern[2] || LABEL_REG_EXP_STR;
      if (name && pattern[2]) {
        if (regexpStr === ".*") {
          throw PATH_ERROR;
        }
        regexpStr = regexpStr.replace(/^\((?!\?:)(?=[^)]+\)$)/, "(?:");
        if (/\((?!\?:)/.test(regexpStr)) {
          throw PATH_ERROR;
        }
      }
      node = this.#children[regexpStr];
      if (!node) {
        if (Object.keys(this.#children).some(
          (k) => k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.#children[regexpStr] = new _Node();
        if (name !== "") {
          node.#varIndex = context2.varIndex++;
        }
      }
      if (!pathErrorCheckOnly && name !== "") {
        paramMap.push([name, node.#varIndex]);
      }
    } else {
      node = this.#children[token];
      if (!node) {
        if (Object.keys(this.#children).some(
          (k) => k.length > 1 && k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.#children[token] = new _Node();
      }
    }
    node.insert(restTokens, index, paramMap, context2, pathErrorCheckOnly);
  }
  buildRegExpStr() {
    const childKeys = Object.keys(this.#children).sort(compareKey);
    const strList = childKeys.map((k) => {
      const c = this.#children[k];
      return (typeof c.#varIndex === "number" ? `(${k})@${c.#varIndex}` : regExpMetaChars.has(k) ? `\\${k}` : k) + c.buildRegExpStr();
    });
    if (typeof this.#index === "number") {
      strList.unshift(`#${this.#index}`);
    }
    if (strList.length === 0) {
      return "";
    }
    if (strList.length === 1) {
      return strList[0];
    }
    return "(?:" + strList.join("|") + ")";
  }
};

// node_modules/hono/dist/router/reg-exp-router/trie.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var Trie = class {
  static {
    __name(this, "Trie");
  }
  #context = { varIndex: 0 };
  #root = new Node();
  insert(path, index, pathErrorCheckOnly) {
    const paramAssoc = [];
    const groups = [];
    for (let i = 0; ; ) {
      let replaced = false;
      path = path.replace(/\{[^}]+\}/g, (m) => {
        const mark = `@\\${i}`;
        groups[i] = [mark, m];
        i++;
        replaced = true;
        return mark;
      });
      if (!replaced) {
        break;
      }
    }
    const tokens = path.match(/(?::[^\/]+)|(?:\/\*$)|./g) || [];
    for (let i = groups.length - 1; i >= 0; i--) {
      const [mark] = groups[i];
      for (let j = tokens.length - 1; j >= 0; j--) {
        if (tokens[j].indexOf(mark) !== -1) {
          tokens[j] = tokens[j].replace(mark, groups[i][1]);
          break;
        }
      }
    }
    this.#root.insert(tokens, index, paramAssoc, this.#context, pathErrorCheckOnly);
    return paramAssoc;
  }
  buildRegExp() {
    let regexp = this.#root.buildRegExpStr();
    if (regexp === "") {
      return [/^$/, [], []];
    }
    let captureIndex = 0;
    const indexReplacementMap = [];
    const paramReplacementMap = [];
    regexp = regexp.replace(/#(\d+)|@(\d+)|\.\*\$/g, (_, handlerIndex, paramIndex) => {
      if (handlerIndex !== void 0) {
        indexReplacementMap[++captureIndex] = Number(handlerIndex);
        return "$()";
      }
      if (paramIndex !== void 0) {
        paramReplacementMap[Number(paramIndex)] = ++captureIndex;
        return "";
      }
      return "";
    });
    return [new RegExp(`^${regexp}`), indexReplacementMap, paramReplacementMap];
  }
};

// node_modules/hono/dist/router/reg-exp-router/router.js
var nullMatcher = [/^$/, [], /* @__PURE__ */ Object.create(null)];
var wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
function buildWildcardRegExp(path) {
  return wildcardRegExpCache[path] ??= new RegExp(
    path === "*" ? "" : `^${path.replace(
      /\/\*$|([.\\+*[^\]$()])/g,
      (_, metaChar) => metaChar ? `\\${metaChar}` : "(?:|/.*)"
    )}$`
  );
}
__name(buildWildcardRegExp, "buildWildcardRegExp");
function clearWildcardRegExpCache() {
  wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
}
__name(clearWildcardRegExpCache, "clearWildcardRegExpCache");
function buildMatcherFromPreprocessedRoutes(routes) {
  const trie = new Trie();
  const handlerData = [];
  if (routes.length === 0) {
    return nullMatcher;
  }
  const routesWithStaticPathFlag = routes.map(
    (route) => [!/\*|\/:/.test(route[0]), ...route]
  ).sort(
    ([isStaticA, pathA], [isStaticB, pathB]) => isStaticA ? 1 : isStaticB ? -1 : pathA.length - pathB.length
  );
  const staticMap = /* @__PURE__ */ Object.create(null);
  for (let i = 0, j = -1, len = routesWithStaticPathFlag.length; i < len; i++) {
    const [pathErrorCheckOnly, path, handlers] = routesWithStaticPathFlag[i];
    if (pathErrorCheckOnly) {
      staticMap[path] = [handlers.map(([h]) => [h, /* @__PURE__ */ Object.create(null)]), emptyParam];
    } else {
      j++;
    }
    let paramAssoc;
    try {
      paramAssoc = trie.insert(path, j, pathErrorCheckOnly);
    } catch (e) {
      throw e === PATH_ERROR ? new UnsupportedPathError(path) : e;
    }
    if (pathErrorCheckOnly) {
      continue;
    }
    handlerData[j] = handlers.map(([h, paramCount]) => {
      const paramIndexMap = /* @__PURE__ */ Object.create(null);
      paramCount -= 1;
      for (; paramCount >= 0; paramCount--) {
        const [key, value] = paramAssoc[paramCount];
        paramIndexMap[key] = value;
      }
      return [h, paramIndexMap];
    });
  }
  const [regexp, indexReplacementMap, paramReplacementMap] = trie.buildRegExp();
  for (let i = 0, len = handlerData.length; i < len; i++) {
    for (let j = 0, len2 = handlerData[i].length; j < len2; j++) {
      const map = handlerData[i][j]?.[1];
      if (!map) {
        continue;
      }
      const keys = Object.keys(map);
      for (let k = 0, len3 = keys.length; k < len3; k++) {
        map[keys[k]] = paramReplacementMap[map[keys[k]]];
      }
    }
  }
  const handlerMap = [];
  for (const i in indexReplacementMap) {
    handlerMap[i] = handlerData[indexReplacementMap[i]];
  }
  return [regexp, handlerMap, staticMap];
}
__name(buildMatcherFromPreprocessedRoutes, "buildMatcherFromPreprocessedRoutes");
function findMiddleware(middleware, path) {
  if (!middleware) {
    return void 0;
  }
  for (const k of Object.keys(middleware).sort((a, b) => b.length - a.length)) {
    if (buildWildcardRegExp(k).test(path)) {
      return [...middleware[k]];
    }
  }
  return void 0;
}
__name(findMiddleware, "findMiddleware");
var RegExpRouter = class {
  static {
    __name(this, "RegExpRouter");
  }
  name = "RegExpRouter";
  #middleware;
  #routes;
  constructor() {
    this.#middleware = { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
    this.#routes = { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
  }
  add(method, path, handler) {
    const middleware = this.#middleware;
    const routes = this.#routes;
    if (!middleware || !routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    if (!middleware[method]) {
      ;
      [middleware, routes].forEach((handlerMap) => {
        handlerMap[method] = /* @__PURE__ */ Object.create(null);
        Object.keys(handlerMap[METHOD_NAME_ALL]).forEach((p) => {
          handlerMap[method][p] = [...handlerMap[METHOD_NAME_ALL][p]];
        });
      });
    }
    if (path === "/*") {
      path = "*";
    }
    const paramCount = (path.match(/\/:/g) || []).length;
    if (/\*$/.test(path)) {
      const re = buildWildcardRegExp(path);
      if (method === METHOD_NAME_ALL) {
        Object.keys(middleware).forEach((m) => {
          middleware[m][path] ||= findMiddleware(middleware[m], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || [];
        });
      } else {
        middleware[method][path] ||= findMiddleware(middleware[method], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || [];
      }
      Object.keys(middleware).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(middleware[m]).forEach((p) => {
            re.test(p) && middleware[m][p].push([handler, paramCount]);
          });
        }
      });
      Object.keys(routes).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(routes[m]).forEach(
            (p) => re.test(p) && routes[m][p].push([handler, paramCount])
          );
        }
      });
      return;
    }
    const paths = checkOptionalParameter(path) || [path];
    for (let i = 0, len = paths.length; i < len; i++) {
      const path2 = paths[i];
      Object.keys(routes).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          routes[m][path2] ||= [
            ...findMiddleware(middleware[m], path2) || findMiddleware(middleware[METHOD_NAME_ALL], path2) || []
          ];
          routes[m][path2].push([handler, paramCount - len + i + 1]);
        }
      });
    }
  }
  match = match;
  buildAllMatchers() {
    const matchers = /* @__PURE__ */ Object.create(null);
    Object.keys(this.#routes).concat(Object.keys(this.#middleware)).forEach((method) => {
      matchers[method] ||= this.#buildMatcher(method);
    });
    this.#middleware = this.#routes = void 0;
    clearWildcardRegExpCache();
    return matchers;
  }
  #buildMatcher(method) {
    const routes = [];
    let hasOwnRoute = method === METHOD_NAME_ALL;
    [this.#middleware, this.#routes].forEach((r) => {
      const ownRoute = r[method] ? Object.keys(r[method]).map((path) => [path, r[method][path]]) : [];
      if (ownRoute.length !== 0) {
        hasOwnRoute ||= true;
        routes.push(...ownRoute);
      } else if (method !== METHOD_NAME_ALL) {
        routes.push(
          ...Object.keys(r[METHOD_NAME_ALL]).map((path) => [path, r[METHOD_NAME_ALL][path]])
        );
      }
    });
    if (!hasOwnRoute) {
      return null;
    } else {
      return buildMatcherFromPreprocessedRoutes(routes);
    }
  }
};

// node_modules/hono/dist/router/reg-exp-router/prepared-router.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/hono/dist/router/smart-router/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/hono/dist/router/smart-router/router.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var SmartRouter = class {
  static {
    __name(this, "SmartRouter");
  }
  name = "SmartRouter";
  #routers = [];
  #routes = [];
  constructor(init) {
    this.#routers = init.routers;
  }
  add(method, path, handler) {
    if (!this.#routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    this.#routes.push([method, path, handler]);
  }
  match(method, path) {
    if (!this.#routes) {
      throw new Error("Fatal error");
    }
    const routers = this.#routers;
    const routes = this.#routes;
    const len = routers.length;
    let i = 0;
    let res;
    for (; i < len; i++) {
      const router = routers[i];
      try {
        for (let i2 = 0, len2 = routes.length; i2 < len2; i2++) {
          router.add(...routes[i2]);
        }
        res = router.match(method, path);
      } catch (e) {
        if (e instanceof UnsupportedPathError) {
          continue;
        }
        throw e;
      }
      this.match = router.match.bind(router);
      this.#routers = [router];
      this.#routes = void 0;
      break;
    }
    if (i === len) {
      throw new Error("Fatal error");
    }
    this.name = `SmartRouter + ${this.activeRouter.name}`;
    return res;
  }
  get activeRouter() {
    if (this.#routes || this.#routers.length !== 1) {
      throw new Error("No active router has been determined yet.");
    }
    return this.#routers[0];
  }
};

// node_modules/hono/dist/router/trie-router/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/hono/dist/router/trie-router/router.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/hono/dist/router/trie-router/node.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var emptyParams = /* @__PURE__ */ Object.create(null);
var hasChildren = /* @__PURE__ */ __name((children) => {
  for (const _ in children) {
    return true;
  }
  return false;
}, "hasChildren");
var Node2 = class _Node2 {
  static {
    __name(this, "_Node");
  }
  #methods;
  #children;
  #patterns;
  #order = 0;
  #params = emptyParams;
  constructor(method, handler, children) {
    this.#children = children || /* @__PURE__ */ Object.create(null);
    this.#methods = [];
    if (method && handler) {
      const m = /* @__PURE__ */ Object.create(null);
      m[method] = { handler, possibleKeys: [], score: 0 };
      this.#methods = [m];
    }
    this.#patterns = [];
  }
  insert(method, path, handler) {
    this.#order = ++this.#order;
    let curNode = this;
    const parts = splitRoutingPath(path);
    const possibleKeys = [];
    for (let i = 0, len = parts.length; i < len; i++) {
      const p = parts[i];
      const nextP = parts[i + 1];
      const pattern = getPattern(p, nextP);
      const key = Array.isArray(pattern) ? pattern[0] : p;
      if (key in curNode.#children) {
        curNode = curNode.#children[key];
        if (pattern) {
          possibleKeys.push(pattern[1]);
        }
        continue;
      }
      curNode.#children[key] = new _Node2();
      if (pattern) {
        curNode.#patterns.push(pattern);
        possibleKeys.push(pattern[1]);
      }
      curNode = curNode.#children[key];
    }
    curNode.#methods.push({
      [method]: {
        handler,
        possibleKeys: possibleKeys.filter((v, i, a) => a.indexOf(v) === i),
        score: this.#order
      }
    });
    return curNode;
  }
  #pushHandlerSets(handlerSets, node, method, nodeParams, params) {
    for (let i = 0, len = node.#methods.length; i < len; i++) {
      const m = node.#methods[i];
      const handlerSet = m[method] || m[METHOD_NAME_ALL];
      const processedSet = {};
      if (handlerSet !== void 0) {
        handlerSet.params = /* @__PURE__ */ Object.create(null);
        handlerSets.push(handlerSet);
        if (nodeParams !== emptyParams || params && params !== emptyParams) {
          for (let i2 = 0, len2 = handlerSet.possibleKeys.length; i2 < len2; i2++) {
            const key = handlerSet.possibleKeys[i2];
            const processed = processedSet[handlerSet.score];
            handlerSet.params[key] = params?.[key] && !processed ? params[key] : nodeParams[key] ?? params?.[key];
            processedSet[handlerSet.score] = true;
          }
        }
      }
    }
  }
  search(method, path) {
    const handlerSets = [];
    this.#params = emptyParams;
    const curNode = this;
    let curNodes = [curNode];
    const parts = splitPath(path);
    const curNodesQueue = [];
    const len = parts.length;
    let partOffsets = null;
    for (let i = 0; i < len; i++) {
      const part = parts[i];
      const isLast = i === len - 1;
      const tempNodes = [];
      for (let j = 0, len2 = curNodes.length; j < len2; j++) {
        const node = curNodes[j];
        const nextNode = node.#children[part];
        if (nextNode) {
          nextNode.#params = node.#params;
          if (isLast) {
            if (nextNode.#children["*"]) {
              this.#pushHandlerSets(handlerSets, nextNode.#children["*"], method, node.#params);
            }
            this.#pushHandlerSets(handlerSets, nextNode, method, node.#params);
          } else {
            tempNodes.push(nextNode);
          }
        }
        for (let k = 0, len3 = node.#patterns.length; k < len3; k++) {
          const pattern = node.#patterns[k];
          const params = node.#params === emptyParams ? {} : { ...node.#params };
          if (pattern === "*") {
            const astNode = node.#children["*"];
            if (astNode) {
              this.#pushHandlerSets(handlerSets, astNode, method, node.#params);
              astNode.#params = params;
              tempNodes.push(astNode);
            }
            continue;
          }
          const [key, name, matcher] = pattern;
          if (!part && !(matcher instanceof RegExp)) {
            continue;
          }
          const child = node.#children[key];
          if (matcher instanceof RegExp) {
            if (partOffsets === null) {
              partOffsets = new Array(len);
              let offset = path[0] === "/" ? 1 : 0;
              for (let p = 0; p < len; p++) {
                partOffsets[p] = offset;
                offset += parts[p].length + 1;
              }
            }
            const restPathString = path.substring(partOffsets[i]);
            const m = matcher.exec(restPathString);
            if (m) {
              params[name] = m[0];
              this.#pushHandlerSets(handlerSets, child, method, node.#params, params);
              if (hasChildren(child.#children)) {
                child.#params = params;
                const componentCount = m[0].match(/\//)?.length ?? 0;
                const targetCurNodes = curNodesQueue[componentCount] ||= [];
                targetCurNodes.push(child);
              }
              continue;
            }
          }
          if (matcher === true || matcher.test(part)) {
            params[name] = part;
            if (isLast) {
              this.#pushHandlerSets(handlerSets, child, method, params, node.#params);
              if (child.#children["*"]) {
                this.#pushHandlerSets(
                  handlerSets,
                  child.#children["*"],
                  method,
                  params,
                  node.#params
                );
              }
            } else {
              child.#params = params;
              tempNodes.push(child);
            }
          }
        }
      }
      const shifted = curNodesQueue.shift();
      curNodes = shifted ? tempNodes.concat(shifted) : tempNodes;
    }
    if (handlerSets.length > 1) {
      handlerSets.sort((a, b) => {
        return a.score - b.score;
      });
    }
    return [handlerSets.map(({ handler, params }) => [handler, params])];
  }
};

// node_modules/hono/dist/router/trie-router/router.js
var TrieRouter = class {
  static {
    __name(this, "TrieRouter");
  }
  name = "TrieRouter";
  #node;
  constructor() {
    this.#node = new Node2();
  }
  add(method, path, handler) {
    const results = checkOptionalParameter(path);
    if (results) {
      for (let i = 0, len = results.length; i < len; i++) {
        this.#node.insert(method, results[i], handler);
      }
      return;
    }
    this.#node.insert(method, path, handler);
  }
  match(method, path) {
    return this.#node.search(method, path);
  }
};

// node_modules/hono/dist/hono.js
var Hono2 = class extends Hono {
  static {
    __name(this, "Hono");
  }
  /**
   * Creates an instance of the Hono class.
   *
   * @param options - Optional configuration options for the Hono instance.
   */
  constructor(options = {}) {
    super(options);
    this.router = options.router ?? new SmartRouter({
      routers: [new RegExpRouter(), new TrieRouter()]
    });
  }
};

// node_modules/hono/dist/middleware/cors/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var cors = /* @__PURE__ */ __name((options) => {
  const defaults = {
    origin: "*",
    allowMethods: ["GET", "HEAD", "PUT", "POST", "DELETE", "PATCH"],
    allowHeaders: [],
    exposeHeaders: []
  };
  const opts = {
    ...defaults,
    ...options
  };
  const findAllowOrigin = ((optsOrigin) => {
    if (typeof optsOrigin === "string") {
      if (optsOrigin === "*") {
        return () => optsOrigin;
      } else {
        return (origin) => optsOrigin === origin ? origin : null;
      }
    } else if (typeof optsOrigin === "function") {
      return optsOrigin;
    } else {
      return (origin) => optsOrigin.includes(origin) ? origin : null;
    }
  })(opts.origin);
  const findAllowMethods = ((optsAllowMethods) => {
    if (typeof optsAllowMethods === "function") {
      return optsAllowMethods;
    } else if (Array.isArray(optsAllowMethods)) {
      return () => optsAllowMethods;
    } else {
      return () => [];
    }
  })(opts.allowMethods);
  return /* @__PURE__ */ __name(async function cors2(c, next) {
    function set(key, value) {
      c.res.headers.set(key, value);
    }
    __name(set, "set");
    const allowOrigin = await findAllowOrigin(c.req.header("origin") || "", c);
    if (allowOrigin) {
      set("Access-Control-Allow-Origin", allowOrigin);
    }
    if (opts.credentials) {
      set("Access-Control-Allow-Credentials", "true");
    }
    if (opts.exposeHeaders?.length) {
      set("Access-Control-Expose-Headers", opts.exposeHeaders.join(","));
    }
    if (c.req.method === "OPTIONS") {
      if (opts.origin !== "*") {
        set("Vary", "Origin");
      }
      if (opts.maxAge != null) {
        set("Access-Control-Max-Age", opts.maxAge.toString());
      }
      const allowMethods = await findAllowMethods(c.req.header("origin") || "", c);
      if (allowMethods.length) {
        set("Access-Control-Allow-Methods", allowMethods.join(","));
      }
      let headers = opts.allowHeaders;
      if (!headers?.length) {
        const requestHeaders = c.req.header("Access-Control-Request-Headers");
        if (requestHeaders) {
          headers = requestHeaders.split(/\s*,\s*/);
        }
      }
      if (headers?.length) {
        set("Access-Control-Allow-Headers", headers.join(","));
        c.res.headers.append("Vary", "Access-Control-Request-Headers");
      }
      c.res.headers.delete("Content-Length");
      c.res.headers.delete("Content-Type");
      return new Response(null, {
        headers: c.res.headers,
        status: 204,
        statusText: "No Content"
      });
    }
    await next();
    if (opts.origin !== "*") {
      c.header("Vary", "Origin", { append: true });
    }
  }, "cors2");
}, "cors");

// src/router.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// src/configs/gatewayConfig.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var configCache = /* @__PURE__ */ new Map();
function getProjectConfig(projectId) {
  return configCache.get(projectId);
}
__name(getProjectConfig, "getProjectConfig");
function setProjectConfig(config2) {
  configCache.set(config2.projectId, config2);
}
__name(setProjectConfig, "setProjectConfig");
function hasProjectConfig(projectId) {
  return configCache.has(projectId);
}
__name(hasProjectConfig, "hasProjectConfig");
function clearGatewayConfig() {
  configCache.clear();
}
__name(clearGatewayConfig, "clearGatewayConfig");
function getLoadedProjectIds() {
  return Array.from(configCache.keys());
}
__name(getLoadedProjectIds, "getLoadedProjectIds");

// src/utils/pathMatcher.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/path-to-regexp/dist.es2015/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function lexer(str) {
  var tokens = [];
  var i = 0;
  while (i < str.length) {
    var char = str[i];
    if (char === "*" || char === "+" || char === "?") {
      tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
      continue;
    }
    if (char === "\\") {
      tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
      continue;
    }
    if (char === "{") {
      tokens.push({ type: "OPEN", index: i, value: str[i++] });
      continue;
    }
    if (char === "}") {
      tokens.push({ type: "CLOSE", index: i, value: str[i++] });
      continue;
    }
    if (char === ":") {
      var name = "";
      var j = i + 1;
      while (j < str.length) {
        var code = str.charCodeAt(j);
        if (
          // `0-9`
          code >= 48 && code <= 57 || // `A-Z`
          code >= 65 && code <= 90 || // `a-z`
          code >= 97 && code <= 122 || // `_`
          code === 95
        ) {
          name += str[j++];
          continue;
        }
        break;
      }
      if (!name)
        throw new TypeError("Missing parameter name at ".concat(i));
      tokens.push({ type: "NAME", index: i, value: name });
      i = j;
      continue;
    }
    if (char === "(") {
      var count3 = 1;
      var pattern = "";
      var j = i + 1;
      if (str[j] === "?") {
        throw new TypeError('Pattern cannot start with "?" at '.concat(j));
      }
      while (j < str.length) {
        if (str[j] === "\\") {
          pattern += str[j++] + str[j++];
          continue;
        }
        if (str[j] === ")") {
          count3--;
          if (count3 === 0) {
            j++;
            break;
          }
        } else if (str[j] === "(") {
          count3++;
          if (str[j + 1] !== "?") {
            throw new TypeError("Capturing groups are not allowed at ".concat(j));
          }
        }
        pattern += str[j++];
      }
      if (count3)
        throw new TypeError("Unbalanced pattern at ".concat(i));
      if (!pattern)
        throw new TypeError("Missing pattern at ".concat(i));
      tokens.push({ type: "PATTERN", index: i, value: pattern });
      i = j;
      continue;
    }
    tokens.push({ type: "CHAR", index: i, value: str[i++] });
  }
  tokens.push({ type: "END", index: i, value: "" });
  return tokens;
}
__name(lexer, "lexer");
function parse(str, options) {
  if (options === void 0) {
    options = {};
  }
  var tokens = lexer(str);
  var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a, _b = options.delimiter, delimiter = _b === void 0 ? "/#?" : _b;
  var result = [];
  var key = 0;
  var i = 0;
  var path = "";
  var tryConsume = /* @__PURE__ */ __name(function(type) {
    if (i < tokens.length && tokens[i].type === type)
      return tokens[i++].value;
  }, "tryConsume");
  var mustConsume = /* @__PURE__ */ __name(function(type) {
    var value2 = tryConsume(type);
    if (value2 !== void 0)
      return value2;
    var _a2 = tokens[i], nextType = _a2.type, index = _a2.index;
    throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
  }, "mustConsume");
  var consumeText = /* @__PURE__ */ __name(function() {
    var result2 = "";
    var value2;
    while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
      result2 += value2;
    }
    return result2;
  }, "consumeText");
  var isSafe = /* @__PURE__ */ __name(function(value2) {
    for (var _i = 0, delimiter_1 = delimiter; _i < delimiter_1.length; _i++) {
      var char2 = delimiter_1[_i];
      if (value2.indexOf(char2) > -1)
        return true;
    }
    return false;
  }, "isSafe");
  var safePattern = /* @__PURE__ */ __name(function(prefix2) {
    var prev = result[result.length - 1];
    var prevText = prefix2 || (prev && typeof prev === "string" ? prev : "");
    if (prev && !prevText) {
      throw new TypeError('Must have text between two parameters, missing text after "'.concat(prev.name, '"'));
    }
    if (!prevText || isSafe(prevText))
      return "[^".concat(escapeString(delimiter), "]+?");
    return "(?:(?!".concat(escapeString(prevText), ")[^").concat(escapeString(delimiter), "])+?");
  }, "safePattern");
  while (i < tokens.length) {
    var char = tryConsume("CHAR");
    var name = tryConsume("NAME");
    var pattern = tryConsume("PATTERN");
    if (name || pattern) {
      var prefix = char || "";
      if (prefixes.indexOf(prefix) === -1) {
        path += prefix;
        prefix = "";
      }
      if (path) {
        result.push(path);
        path = "";
      }
      result.push({
        name: name || key++,
        prefix,
        suffix: "",
        pattern: pattern || safePattern(prefix),
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    var value = char || tryConsume("ESCAPED_CHAR");
    if (value) {
      path += value;
      continue;
    }
    if (path) {
      result.push(path);
      path = "";
    }
    var open = tryConsume("OPEN");
    if (open) {
      var prefix = consumeText();
      var name_1 = tryConsume("NAME") || "";
      var pattern_1 = tryConsume("PATTERN") || "";
      var suffix = consumeText();
      mustConsume("CLOSE");
      result.push({
        name: name_1 || (pattern_1 ? key++ : ""),
        pattern: name_1 && !pattern_1 ? safePattern(prefix) : pattern_1,
        prefix,
        suffix,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    mustConsume("END");
  }
  return result;
}
__name(parse, "parse");
function match2(str, options) {
  var keys = [];
  var re = pathToRegexp(str, keys, options);
  return regexpToFunction(re, keys, options);
}
__name(match2, "match");
function regexpToFunction(re, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.decode, decode2 = _a === void 0 ? function(x) {
    return x;
  } : _a;
  return function(pathname) {
    var m = re.exec(pathname);
    if (!m)
      return false;
    var path = m[0], index = m.index;
    var params = /* @__PURE__ */ Object.create(null);
    var _loop_1 = /* @__PURE__ */ __name(function(i2) {
      if (m[i2] === void 0)
        return "continue";
      var key = keys[i2 - 1];
      if (key.modifier === "*" || key.modifier === "+") {
        params[key.name] = m[i2].split(key.prefix + key.suffix).map(function(value) {
          return decode2(value, key);
        });
      } else {
        params[key.name] = decode2(m[i2], key);
      }
    }, "_loop_1");
    for (var i = 1; i < m.length; i++) {
      _loop_1(i);
    }
    return { path, index, params };
  };
}
__name(regexpToFunction, "regexpToFunction");
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
__name(escapeString, "escapeString");
function flags(options) {
  return options && options.sensitive ? "" : "i";
}
__name(flags, "flags");
function regexpToRegexp(path, keys) {
  if (!keys)
    return path;
  var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
  var index = 0;
  var execResult = groupsRegex.exec(path.source);
  while (execResult) {
    keys.push({
      // Use parenthesized substring match if available, index otherwise
      name: execResult[1] || index++,
      prefix: "",
      suffix: "",
      modifier: "",
      pattern: ""
    });
    execResult = groupsRegex.exec(path.source);
  }
  return path;
}
__name(regexpToRegexp, "regexpToRegexp");
function arrayToRegexp(paths, keys, options) {
  var parts = paths.map(function(path) {
    return pathToRegexp(path, keys, options).source;
  });
  return new RegExp("(?:".concat(parts.join("|"), ")"), flags(options));
}
__name(arrayToRegexp, "arrayToRegexp");
function stringToRegexp(path, keys, options) {
  return tokensToRegexp(parse(path, options), keys, options);
}
__name(stringToRegexp, "stringToRegexp");
function tokensToRegexp(tokens, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function(x) {
    return x;
  } : _d, _e = options.delimiter, delimiter = _e === void 0 ? "/#?" : _e, _f = options.endsWith, endsWith = _f === void 0 ? "" : _f;
  var endsWithRe = "[".concat(escapeString(endsWith), "]|$");
  var delimiterRe = "[".concat(escapeString(delimiter), "]");
  var route = start ? "^" : "";
  for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
    var token = tokens_1[_i];
    if (typeof token === "string") {
      route += escapeString(encode(token));
    } else {
      var prefix = escapeString(encode(token.prefix));
      var suffix = escapeString(encode(token.suffix));
      if (token.pattern) {
        if (keys)
          keys.push(token);
        if (prefix || suffix) {
          if (token.modifier === "+" || token.modifier === "*") {
            var mod = token.modifier === "*" ? "?" : "";
            route += "(?:".concat(prefix, "((?:").concat(token.pattern, ")(?:").concat(suffix).concat(prefix, "(?:").concat(token.pattern, "))*)").concat(suffix, ")").concat(mod);
          } else {
            route += "(?:".concat(prefix, "(").concat(token.pattern, ")").concat(suffix, ")").concat(token.modifier);
          }
        } else {
          if (token.modifier === "+" || token.modifier === "*") {
            throw new TypeError('Can not repeat "'.concat(token.name, '" without a prefix and suffix'));
          }
          route += "(".concat(token.pattern, ")").concat(token.modifier);
        }
      } else {
        route += "(?:".concat(prefix).concat(suffix, ")").concat(token.modifier);
      }
    }
  }
  if (end) {
    if (!strict)
      route += "".concat(delimiterRe, "?");
    route += !options.endsWith ? "$" : "(?=".concat(endsWithRe, ")");
  } else {
    var endToken = tokens[tokens.length - 1];
    var isEndDelimited = typeof endToken === "string" ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1 : endToken === void 0;
    if (!strict) {
      route += "(?:".concat(delimiterRe, "(?=").concat(endsWithRe, "))?");
    }
    if (!isEndDelimited) {
      route += "(?=".concat(delimiterRe, "|").concat(endsWithRe, ")");
    }
  }
  return new RegExp(route, flags(options));
}
__name(tokensToRegexp, "tokensToRegexp");
function pathToRegexp(path, keys, options) {
  if (path instanceof RegExp)
    return regexpToRegexp(path, keys);
  if (Array.isArray(path))
    return arrayToRegexp(path, keys, options);
  return stringToRegexp(path, keys, options);
}
__name(pathToRegexp, "pathToRegexp");

// src/utils/pathMatcher.ts
function matchRoute(pattern, path) {
  try {
    const matcher = match2(pattern, { decode: decodeURIComponent, end: true });
    const result = matcher(path);
    if (!result)
      return { matched: false };
    return { matched: true, params: result.params };
  } catch (err) {
    console.error("Route matching error:", err);
    return { matched: false };
  }
}
__name(matchRoute, "matchRoute");

// src/utils/querynormaliser.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var toSortedQueryString = /* @__PURE__ */ __name((queryObj) => {
  const keys = Object.keys(queryObj).sort();
  const params = new URLSearchParams();
  for (const key of keys) {
    const val = queryObj[key];
    if (val !== void 0 && val !== null) {
      params.append(key, val);
    }
  }
  if (keys.length) return "?" + params.toString();
  else return params.toString();
}, "toSortedQueryString");

// src/configs/connectredis.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@upstash/redis/nodejs.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@upstash/redis/chunk-IH7W44G6.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/uncrypto/dist/crypto.web.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var webCrypto = globalThis.crypto;
var subtle = webCrypto.subtle;

// node_modules/@upstash/redis/chunk-IH7W44G6.mjs
var __defProp2 = Object.defineProperty;
var __export = /* @__PURE__ */ __name((target, all) => {
  for (var name in all)
    __defProp2(target, name, { get: all[name], enumerable: true });
}, "__export");
var error_exports = {};
__export(error_exports, {
  UpstashError: /* @__PURE__ */ __name(() => UpstashError, "UpstashError"),
  UpstashJSONParseError: /* @__PURE__ */ __name(() => UpstashJSONParseError, "UpstashJSONParseError"),
  UrlError: /* @__PURE__ */ __name(() => UrlError, "UrlError")
});
var UpstashError = class extends Error {
  static {
    __name(this, "UpstashError");
  }
  constructor(message, options) {
    super(message, options);
    this.name = "UpstashError";
  }
};
var UrlError = class extends Error {
  static {
    __name(this, "UrlError");
  }
  constructor(url) {
    super(
      `Upstash Redis client was passed an invalid URL. You should pass a URL starting with https. Received: "${url}". `
    );
    this.name = "UrlError";
  }
};
var UpstashJSONParseError = class extends UpstashError {
  static {
    __name(this, "UpstashJSONParseError");
  }
  constructor(body, options) {
    const truncatedBody = body.length > 200 ? body.slice(0, 200) + "..." : body;
    super(`Unable to parse response body: ${truncatedBody}`, options);
    this.name = "UpstashJSONParseError";
  }
};
function parseRecursive(obj) {
  const parsed = Array.isArray(obj) ? obj.map((o) => {
    try {
      return parseRecursive(o);
    } catch {
      return o;
    }
  }) : JSON.parse(obj);
  if (typeof parsed === "number" && parsed.toString() !== obj) {
    return obj;
  }
  return parsed;
}
__name(parseRecursive, "parseRecursive");
function parseResponse(result) {
  try {
    return parseRecursive(result);
  } catch {
    return result;
  }
}
__name(parseResponse, "parseResponse");
function deserializeScanResponse(result) {
  return [result[0], ...parseResponse(result.slice(1))];
}
__name(deserializeScanResponse, "deserializeScanResponse");
function deserializeScanWithTypesResponse(result) {
  const [cursor, keys] = result;
  const parsedKeys = [];
  for (let i = 0; i < keys.length; i += 2) {
    parsedKeys.push({ key: keys[i], type: keys[i + 1] });
  }
  return [cursor, parsedKeys];
}
__name(deserializeScanWithTypesResponse, "deserializeScanWithTypesResponse");
function mergeHeaders(...headers) {
  const merged = {};
  for (const header of headers) {
    if (!header) continue;
    for (const [key, value] of Object.entries(header)) {
      if (value !== void 0 && value !== null) {
        merged[key] = value;
      }
    }
  }
  return merged;
}
__name(mergeHeaders, "mergeHeaders");
function kvArrayToObject(v) {
  if (typeof v === "object" && v !== null && !Array.isArray(v)) return v;
  if (!Array.isArray(v)) return {};
  const obj = {};
  for (let i = 0; i < v.length; i += 2) {
    if (typeof v[i] === "string") obj[v[i]] = v[i + 1];
  }
  return obj;
}
__name(kvArrayToObject, "kvArrayToObject");
var MAX_BUFFER_SIZE = 1024 * 1024;
var HttpClient = class {
  static {
    __name(this, "HttpClient");
  }
  baseUrl;
  headers;
  options;
  readYourWrites;
  upstashSyncToken = "";
  hasCredentials;
  retry;
  constructor(config2) {
    this.options = {
      backend: config2.options?.backend,
      agent: config2.agent,
      responseEncoding: config2.responseEncoding ?? "base64",
      // default to base64
      cache: config2.cache,
      signal: config2.signal,
      keepAlive: config2.keepAlive ?? true
    };
    this.upstashSyncToken = "";
    this.readYourWrites = config2.readYourWrites ?? true;
    this.baseUrl = (config2.baseUrl || "").replace(/\/$/, "");
    const urlRegex = /^https?:\/\/[^\s#$./?].\S*$/;
    if (this.baseUrl && !urlRegex.test(this.baseUrl)) {
      throw new UrlError(this.baseUrl);
    }
    this.headers = {
      "Content-Type": "application/json",
      ...config2.headers
    };
    this.hasCredentials = Boolean(this.baseUrl && this.headers.authorization.split(" ")[1]);
    if (this.options.responseEncoding === "base64") {
      this.headers["Upstash-Encoding"] = "base64";
    }
    this.retry = typeof config2.retry === "boolean" && !config2.retry ? {
      attempts: 1,
      backoff: /* @__PURE__ */ __name(() => 0, "backoff")
    } : {
      attempts: config2.retry?.retries ?? 5,
      backoff: config2.retry?.backoff ?? ((retryCount) => Math.exp(retryCount) * 50)
    };
  }
  mergeTelemetry(telemetry) {
    this.headers = merge(this.headers, "Upstash-Telemetry-Runtime", telemetry.runtime);
    this.headers = merge(this.headers, "Upstash-Telemetry-Platform", telemetry.platform);
    this.headers = merge(this.headers, "Upstash-Telemetry-Sdk", telemetry.sdk);
  }
  async request(req) {
    const requestHeaders = mergeHeaders(this.headers, req.headers ?? {});
    const requestUrl = [this.baseUrl, ...req.path ?? []].join("/");
    const isEventStream = requestHeaders.Accept === "text/event-stream";
    const signal = req.signal ?? this.options.signal;
    const isSignalFunction = typeof signal === "function";
    const requestOptions = {
      cache: this.options.cache,
      method: "POST",
      headers: requestHeaders,
      body: JSON.stringify(req.body),
      keepalive: this.options.keepAlive,
      agent: this.options.agent,
      signal: isSignalFunction ? signal() : signal,
      /**
       * Fastly specific
       */
      backend: this.options.backend
    };
    if (!this.hasCredentials) {
      console.warn(
        "[Upstash Redis] Redis client was initialized without url or token. Failed to execute command."
      );
    }
    if (this.readYourWrites) {
      const newHeader = this.upstashSyncToken;
      this.headers["upstash-sync-token"] = newHeader;
    }
    let res = null;
    let error3 = null;
    for (let i = 0; i <= this.retry.attempts; i++) {
      try {
        res = await fetch(requestUrl, requestOptions);
        break;
      } catch (error_) {
        if (requestOptions.signal?.aborted && isSignalFunction) {
          throw error_;
        } else if (requestOptions.signal?.aborted) {
          const myBlob = new Blob([
            JSON.stringify({ result: requestOptions.signal.reason ?? "Aborted" })
          ]);
          const myOptions = {
            status: 200,
            statusText: requestOptions.signal.reason ?? "Aborted"
          };
          res = new Response(myBlob, myOptions);
          break;
        }
        error3 = error_;
        if (i < this.retry.attempts) {
          await new Promise((r) => setTimeout(r, this.retry.backoff(i)));
        }
      }
    }
    if (!res) {
      throw error3 ?? new Error("Exhausted all retries");
    }
    if (!res.ok) {
      let body2;
      const rawBody2 = await res.text();
      try {
        body2 = JSON.parse(rawBody2);
      } catch (error22) {
        throw new UpstashJSONParseError(rawBody2, { cause: error22 });
      }
      throw new UpstashError(`${body2.error}, command was: ${JSON.stringify(req.body)}`);
    }
    if (this.readYourWrites) {
      const headers = res.headers;
      this.upstashSyncToken = headers.get("upstash-sync-token") ?? "";
    }
    if (isEventStream && req && req.onMessage && res.body) {
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      (async () => {
        try {
          let buffer = "";
          while (true) {
            const { value, done } = await reader.read();
            if (done) break;
            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split("\n");
            buffer = lines.pop() || "";
            if (buffer.length > MAX_BUFFER_SIZE) {
              throw new Error("Buffer size exceeded (1MB)");
            }
            for (const line of lines) {
              if (line.startsWith("data: ")) {
                const data = line.slice(6);
                req.onMessage?.(data);
              }
            }
          }
        } catch (error22) {
          if (error22 instanceof Error && error22.name === "AbortError") {
          } else {
            console.error("Stream reading error:", error22);
          }
        } finally {
          try {
            await reader.cancel();
          } catch {
          }
        }
      })();
      return { result: 1 };
    }
    let body;
    const rawBody = await res.text();
    try {
      body = JSON.parse(rawBody);
    } catch (error22) {
      throw new UpstashJSONParseError(rawBody, { cause: error22 });
    }
    if (this.readYourWrites) {
      const headers = res.headers;
      this.upstashSyncToken = headers.get("upstash-sync-token") ?? "";
    }
    if (this.options.responseEncoding === "base64") {
      if (Array.isArray(body)) {
        return body.map(({ result: result2, error: error22 }) => ({
          result: decode(result2),
          error: error22
        }));
      }
      const result = decode(body.result);
      return { result, error: body.error };
    }
    return body;
  }
};
function base64decode(b64) {
  let dec = "";
  try {
    const binString = atob(b64);
    const size = binString.length;
    const bytes = new Uint8Array(size);
    for (let i = 0; i < size; i++) {
      bytes[i] = binString.charCodeAt(i);
    }
    dec = new TextDecoder().decode(bytes);
  } catch {
    dec = b64;
  }
  return dec;
}
__name(base64decode, "base64decode");
function decode(raw2) {
  let result = void 0;
  switch (typeof raw2) {
    case "undefined": {
      return raw2;
    }
    case "number": {
      result = raw2;
      break;
    }
    case "object": {
      if (Array.isArray(raw2)) {
        result = raw2.map(
          (v) => typeof v === "string" ? base64decode(v) : Array.isArray(v) ? v.map((element) => decode(element)) : v
        );
      } else {
        result = null;
      }
      break;
    }
    case "string": {
      result = raw2 === "OK" ? "OK" : base64decode(raw2);
      break;
    }
    default: {
      break;
    }
  }
  return result;
}
__name(decode, "decode");
function merge(obj, key, value) {
  if (!value) {
    return obj;
  }
  obj[key] = obj[key] ? [obj[key], value].join(",") : value;
  return obj;
}
__name(merge, "merge");
var defaultSerializer = /* @__PURE__ */ __name((c) => {
  switch (typeof c) {
    case "string":
    case "number":
    case "boolean": {
      return c;
    }
    default: {
      return JSON.stringify(c);
    }
  }
}, "defaultSerializer");
var Command = class {
  static {
    __name(this, "Command");
  }
  command;
  serialize;
  deserialize;
  headers;
  path;
  onMessage;
  isStreaming;
  signal;
  /**
   * Create a new command instance.
   *
   * You can define a custom `deserialize` function. By default we try to deserialize as json.
   */
  constructor(command, opts) {
    this.serialize = defaultSerializer;
    this.deserialize = opts?.automaticDeserialization === void 0 || opts.automaticDeserialization ? opts?.deserialize ?? parseResponse : (x) => x;
    this.command = command.map((c) => this.serialize(c));
    this.headers = opts?.headers;
    this.path = opts?.path;
    this.onMessage = opts?.streamOptions?.onMessage;
    this.isStreaming = opts?.streamOptions?.isStreaming ?? false;
    this.signal = opts?.streamOptions?.signal;
    if (opts?.latencyLogging) {
      const originalExec = this.exec.bind(this);
      this.exec = async (client) => {
        const start = performance.now();
        const result = await originalExec(client);
        const end = performance.now();
        const loggerResult = (end - start).toFixed(2);
        console.log(
          `Latency for \x1B[38;2;19;185;39m${this.command[0].toString().toUpperCase()}\x1B[0m: \x1B[38;2;0;255;255m${loggerResult} ms\x1B[0m`
        );
        return result;
      };
    }
  }
  /**
   * Execute the command using a client.
   */
  async exec(client) {
    const { result, error: error3 } = await client.request({
      body: this.command,
      path: this.path,
      upstashSyncToken: client.upstashSyncToken,
      headers: this.headers,
      onMessage: this.onMessage,
      isStreaming: this.isStreaming,
      signal: this.signal
    });
    if (error3) {
      throw new UpstashError(error3);
    }
    if (result === void 0) {
      throw new TypeError("Request did not return a result");
    }
    return this.deserialize(result);
  }
};
var ExecCommand = class extends Command {
  static {
    __name(this, "ExecCommand");
  }
  constructor(cmd, opts) {
    const normalizedCmd = cmd.map((arg) => typeof arg === "string" ? arg : String(arg));
    super(normalizedCmd, opts);
  }
};
var FIELD_TYPES = [
  "TEXT",
  "U64",
  "I64",
  "F64",
  "BOOL",
  "DATE",
  "KEYWORD",
  "FACET"
];
function isFieldType(value) {
  return typeof value === "string" && FIELD_TYPES.includes(value);
}
__name(isFieldType, "isFieldType");
function isDetailedField(value) {
  return typeof value === "object" && value !== null && "type" in value && isFieldType(value.type);
}
__name(isDetailedField, "isDetailedField");
function isNestedSchema(value) {
  return typeof value === "object" && value !== null && !isDetailedField(value);
}
__name(isNestedSchema, "isNestedSchema");
function flattenSchema(schema, pathPrefix = []) {
  const fields = [];
  for (const [key, value] of Object.entries(schema)) {
    const currentPath = [...pathPrefix, key];
    const pathString = currentPath.join(".");
    if (isFieldType(value)) {
      fields.push({
        path: pathString,
        type: value
      });
    } else if (isDetailedField(value)) {
      fields.push({
        path: pathString,
        type: value.type,
        fast: "fast" in value ? value.fast : void 0,
        noTokenize: "noTokenize" in value ? value.noTokenize : void 0,
        noStem: "noStem" in value ? value.noStem : void 0,
        from: "from" in value ? value.from : void 0
      });
    } else if (isNestedSchema(value)) {
      const nestedFields = flattenSchema(value, currentPath);
      fields.push(...nestedFields);
    }
  }
  return fields;
}
__name(flattenSchema, "flattenSchema");
function deserializeQueryResponse(rawResponse) {
  return rawResponse.map((itemRaw) => {
    const raw2 = itemRaw;
    const key = raw2[0];
    const score = Number(raw2[1]);
    const rawFields = raw2[2];
    if (rawFields === void 0) {
      return { key, score };
    }
    if (!Array.isArray(rawFields) || rawFields.length === 0) {
      return { key, score, data: {} };
    }
    let data = {};
    for (const fieldRaw of rawFields) {
      const key2 = fieldRaw[0];
      const value = fieldRaw[1];
      const pathParts = key2.split(".");
      if (pathParts.length === 1) {
        data[key2] = value;
      } else {
        let currentObj = data;
        for (let i = 0; i < pathParts.length - 1; i++) {
          const pathPart = pathParts[i];
          if (!(pathPart in currentObj)) {
            currentObj[pathPart] = {};
          }
          currentObj = currentObj[pathPart];
        }
        currentObj[pathParts.at(-1)] = value;
      }
    }
    if ("$" in data) {
      data = data["$"];
    }
    return { key, score, data };
  });
}
__name(deserializeQueryResponse, "deserializeQueryResponse");
function deserializeDescribeResponse(rawResponse) {
  const description = {};
  for (let i = 0; i < rawResponse.length; i += 2) {
    const descriptor = rawResponse[i];
    switch (descriptor) {
      case "name": {
        description["name"] = rawResponse[i + 1];
        break;
      }
      case "type": {
        description["dataType"] = rawResponse[i + 1].toLowerCase();
        break;
      }
      case "prefixes": {
        description["prefixes"] = rawResponse[i + 1];
        break;
      }
      case "language": {
        description["language"] = rawResponse[i + 1];
        break;
      }
      case "schema": {
        const schema = {};
        for (const fieldDescription of rawResponse[i + 1]) {
          const fieldName = fieldDescription[0];
          const fieldInfo = { type: fieldDescription[1] };
          if (fieldDescription.length > 2) {
            for (let j = 2; j < fieldDescription.length; j++) {
              const fieldOption = fieldDescription[j];
              switch (fieldOption) {
                case "NOSTEM": {
                  fieldInfo.noStem = true;
                  break;
                }
                case "NOTOKENIZE": {
                  fieldInfo.noTokenize = true;
                  break;
                }
                case "FAST": {
                  fieldInfo.fast = true;
                  break;
                }
                case "FROM": {
                  fieldInfo.from = fieldDescription[++j];
                  break;
                }
              }
            }
          }
          schema[fieldName] = fieldInfo;
        }
        description["schema"] = schema;
        break;
      }
    }
  }
  return description;
}
__name(deserializeDescribeResponse, "deserializeDescribeResponse");
function parseCountResponse(rawResponse) {
  return typeof rawResponse === "number" ? rawResponse : Number.parseInt(rawResponse, 10);
}
__name(parseCountResponse, "parseCountResponse");
function deserializeAggregateResponse(rawResponse) {
  return parseAggregationArray(rawResponse);
}
__name(deserializeAggregateResponse, "deserializeAggregateResponse");
function parseAggregationArray(arr) {
  const result = {};
  for (let i = 0; i < arr.length; i += 2) {
    const key = arr[i];
    const value = arr[i + 1];
    if (Array.isArray(value)) {
      if (value.length > 0 && typeof value[0] === "string") {
        result[key] = value[0] === "buckets" ? parseBucketsValue(value) : parseStatsValue(value);
      } else {
        result[key] = parseAggregationArray(value);
      }
    } else {
      result[key] = value;
    }
  }
  return result;
}
__name(parseAggregationArray, "parseAggregationArray");
function coerceNumericString(value) {
  if (typeof value === "string" && value !== "" && !Number.isNaN(Number(value))) {
    return Number(value);
  }
  return value;
}
__name(coerceNumericString, "coerceNumericString");
function parseStatsValue(arr) {
  const result = {};
  for (let i = 0; i < arr.length; i += 2) {
    const key = arr[i];
    const value = arr[i + 1];
    if (Array.isArray(value) && value.length > 0) {
      if (typeof value[0] === "string") {
        result[key] = parseStatsValue(value);
      } else if (Array.isArray(value[0]) && typeof value[0][0] === "string") {
        result[key] = value.map((item) => parseStatsValue(item));
      } else {
        result[key] = value;
      }
    } else {
      result[key] = coerceNumericString(value);
    }
  }
  return result;
}
__name(parseStatsValue, "parseStatsValue");
function parseBucketsValue(arr) {
  if (arr[0] === "buckets" && Array.isArray(arr[1])) {
    const result = {
      buckets: arr[1].map((bucket) => {
        const bucketObj = {};
        for (let i = 0; i < bucket.length; i += 2) {
          const key = bucket[i];
          const value = bucket[i + 1];
          bucketObj[key] = Array.isArray(value) && value.length > 0 && typeof value[0] === "string" ? parseStatsValue(value) : value;
        }
        return bucketObj;
      })
    };
    for (let i = 2; i < arr.length; i += 2) {
      result[arr[i]] = arr[i + 1];
    }
    return result;
  }
  return arr;
}
__name(parseBucketsValue, "parseBucketsValue");
function buildQueryCommand(redisCommand, name, options) {
  const query = JSON.stringify(options?.filter ?? {});
  const command = [redisCommand, name, query];
  if (options?.limit !== void 0) {
    command.push("LIMIT", options.limit.toString());
  }
  if (options?.offset !== void 0) {
    command.push("OFFSET", options.offset.toString());
  }
  if (options?.select && Object.keys(options.select).length === 0) {
    command.push("NOCONTENT");
  }
  if (options) {
    if ("orderBy" in options && options.orderBy) {
      command.push("ORDERBY");
      for (const [field, direction] of Object.entries(options.orderBy)) {
        command.push(field, direction);
      }
    } else if ("scoreFunc" in options && options.scoreFunc) {
      command.push("SCOREFUNC", ...buildScoreFunc(options.scoreFunc));
    }
  }
  if (options?.highlight) {
    command.push(
      "HIGHLIGHT",
      "FIELDS",
      options.highlight.fields.length.toString(),
      ...options.highlight.fields
    );
    if (options.highlight.preTag && options.highlight.postTag) {
      command.push("TAGS", options.highlight.preTag, options.highlight.postTag);
    }
  }
  if (options?.select && Object.keys(options.select).length > 0) {
    command.push(
      "SELECT",
      Object.keys(options.select).length.toString(),
      ...Object.keys(options.select)
    );
  }
  return command;
}
__name(buildQueryCommand, "buildQueryCommand");
function buildScoreFunc(scoreBy) {
  const result = [];
  if (typeof scoreBy === "string") {
    result.push("FIELDVALUE", scoreBy);
  } else if ("fields" in scoreBy) {
    if (scoreBy.combineMode) {
      result.push("COMBINEMODE", scoreBy.combineMode.toUpperCase());
    }
    if (scoreBy.scoreMode) {
      result.push("SCOREMODE", scoreBy.scoreMode.toUpperCase());
    }
    for (const field of scoreBy.fields) {
      result.push(...buildScoreFuncField(field));
    }
  } else {
    result.push(...buildScoreFuncField(scoreBy));
  }
  return result;
}
__name(buildScoreFunc, "buildScoreFunc");
function buildScoreFuncField(field) {
  const result = [];
  if (typeof field === "string") {
    result.push("FIELDVALUE", field);
  } else {
    if (field.scoreMode) {
      result.push("SCOREMODE", field.scoreMode.toUpperCase());
    }
    result.push("FIELDVALUE", field.field);
    if (field.modifier) {
      result.push("MODIFIER", field.modifier.toUpperCase());
    }
    if (field.factor !== void 0) {
      result.push("FACTOR", field.factor.toString());
    }
    if (field.missing !== void 0) {
      result.push("MISSING", field.missing.toString());
    }
  }
  return result;
}
__name(buildScoreFuncField, "buildScoreFuncField");
function buildCreateIndexCommand(params) {
  const { name, schema, dataType, prefix, language, skipInitialScan, existsOk } = params;
  const prefixArray = Array.isArray(prefix) ? prefix : [prefix];
  const payload = [
    name,
    ...skipInitialScan ? ["SKIPINITIALSCAN"] : [],
    ...existsOk ? ["EXISTSOK"] : [],
    "ON",
    dataType.toUpperCase(),
    "PREFIX",
    prefixArray.length.toString(),
    ...prefixArray,
    ...language ? ["LANGUAGE", language] : [],
    "SCHEMA"
  ];
  const fields = flattenSchema(schema);
  for (const field of fields) {
    payload.push(field.path, field.type);
    if (field.fast) {
      payload.push("FAST");
    }
    if (field.noTokenize) {
      payload.push("NOTOKENIZE");
    }
    if (field.noStem) {
      payload.push("NOSTEM");
    }
    if (field.from) {
      payload.push("FROM", field.from);
    }
  }
  return ["SEARCH.CREATE", ...payload];
}
__name(buildCreateIndexCommand, "buildCreateIndexCommand");
function buildAggregateCommand(name, options) {
  const query = JSON.stringify(options?.filter ?? {});
  const aggregations = JSON.stringify(options.aggregations);
  return ["SEARCH.AGGREGATE", name, query, aggregations];
}
__name(buildAggregateCommand, "buildAggregateCommand");
var SearchIndex = class {
  static {
    __name(this, "SearchIndex");
  }
  name;
  schema;
  client;
  constructor({ name, schema, client }) {
    this.name = name;
    this.schema = schema;
    this.client = client;
  }
  async waitIndexing() {
    const command = ["SEARCH.WAITINDEXING", this.name];
    return await new ExecCommand(command).exec(this.client);
  }
  async describe() {
    const command = ["SEARCH.DESCRIBE", this.name];
    const rawResult = await new ExecCommand(command).exec(
      this.client
    );
    if (!rawResult) return null;
    return deserializeDescribeResponse(rawResult);
  }
  async query(options) {
    const command = buildQueryCommand("SEARCH.QUERY", this.name, options);
    const rawResult = await new ExecCommand(command).exec(
      this.client
    );
    if (!rawResult) return rawResult;
    return deserializeQueryResponse(rawResult);
  }
  async aggregate(options) {
    const command = buildAggregateCommand(this.name, options);
    const rawResult = await new ExecCommand(
      command
    ).exec(this.client);
    return deserializeAggregateResponse(rawResult);
  }
  async count({ filter }) {
    const command = buildQueryCommand("SEARCH.COUNT", this.name, { filter });
    const rawResult = await new ExecCommand(command).exec(
      this.client
    );
    return { count: parseCountResponse(rawResult) };
  }
  async drop() {
    const command = ["SEARCH.DROP", this.name];
    const result = await new ExecCommand(command).exec(this.client);
    return result;
  }
  async addAlias({ alias }) {
    const command = ["SEARCH.ALIASADD", alias, this.name];
    const result = await new ExecCommand(command).exec(this.client);
    return result;
  }
};
async function createIndex(client, params) {
  const { name, schema } = params;
  const createIndexCommand = buildCreateIndexCommand(params);
  await new ExecCommand(createIndexCommand).exec(client);
  return initIndex(client, { name, schema });
}
__name(createIndex, "createIndex");
function initIndex(client, params) {
  const { name, schema } = params;
  return new SearchIndex({ name, schema, client });
}
__name(initIndex, "initIndex");
async function listAliases(client) {
  const command = ["SEARCH.LISTALIASES"];
  const rawResult = await new ExecCommand(command).exec(client);
  if (rawResult === 0 || Array.isArray(rawResult) && rawResult.length === 0) {
    return {};
  }
  if (!Array.isArray(rawResult)) {
    return {};
  }
  const aliases = {};
  for (const pair of rawResult) {
    if (Array.isArray(pair) && pair.length === 2) {
      const [alias, index] = pair;
      aliases[alias] = index;
    }
  }
  return aliases;
}
__name(listAliases, "listAliases");
async function addAlias(client, { indexName, alias }) {
  const command = ["SEARCH.ALIASADD", alias, indexName];
  const result = await new ExecCommand(command).exec(client);
  return result;
}
__name(addAlias, "addAlias");
async function delAlias(client, { alias }) {
  const command = ["SEARCH.ALIASDEL", alias];
  const result = await new ExecCommand(command).exec(client);
  return result;
}
__name(delAlias, "delAlias");
function deserialize(result) {
  if (result.length === 0) {
    return null;
  }
  const obj = {};
  for (let i = 0; i < result.length; i += 2) {
    const key = result[i];
    const value = result[i + 1];
    try {
      obj[key] = JSON.parse(value);
    } catch {
      obj[key] = value;
    }
  }
  return obj;
}
__name(deserialize, "deserialize");
var HRandFieldCommand = class extends Command {
  static {
    __name(this, "HRandFieldCommand");
  }
  constructor(cmd, opts) {
    const command = ["hrandfield", cmd[0]];
    if (typeof cmd[1] === "number") {
      command.push(cmd[1]);
    }
    if (cmd[2]) {
      command.push("WITHVALUES");
    }
    super(command, {
      // @ts-expect-error to silence compiler
      deserialize: cmd[2] ? (result) => deserialize(result) : opts?.deserialize,
      ...opts
    });
  }
};
var AppendCommand = class extends Command {
  static {
    __name(this, "AppendCommand");
  }
  constructor(cmd, opts) {
    super(["append", ...cmd], opts);
  }
};
var BitCountCommand = class extends Command {
  static {
    __name(this, "BitCountCommand");
  }
  constructor([key, start, end], opts) {
    const command = ["bitcount", key];
    if (typeof start === "number") {
      command.push(start);
    }
    if (typeof end === "number") {
      command.push(end);
    }
    super(command, opts);
  }
};
var BitFieldCommand = class {
  static {
    __name(this, "BitFieldCommand");
  }
  constructor(args, client, opts, execOperation = (command) => command.exec(this.client)) {
    this.client = client;
    this.opts = opts;
    this.execOperation = execOperation;
    this.command = ["bitfield", ...args];
  }
  command;
  chain(...args) {
    this.command.push(...args);
    return this;
  }
  get(...args) {
    return this.chain("get", ...args);
  }
  set(...args) {
    return this.chain("set", ...args);
  }
  incrby(...args) {
    return this.chain("incrby", ...args);
  }
  overflow(overflow) {
    return this.chain("overflow", overflow);
  }
  exec() {
    const command = new Command(this.command, this.opts);
    return this.execOperation(command);
  }
};
var BitOpCommand = class extends Command {
  static {
    __name(this, "BitOpCommand");
  }
  constructor(cmd, opts) {
    super(["bitop", ...cmd], opts);
  }
};
var BitPosCommand = class extends Command {
  static {
    __name(this, "BitPosCommand");
  }
  constructor(cmd, opts) {
    super(["bitpos", ...cmd], opts);
  }
};
var ClientSetInfoCommand = class extends Command {
  static {
    __name(this, "ClientSetInfoCommand");
  }
  constructor([attribute, value], opts) {
    super(["CLIENT", "SETINFO", attribute.toUpperCase(), value], opts);
  }
};
var CopyCommand = class extends Command {
  static {
    __name(this, "CopyCommand");
  }
  constructor([key, destinationKey, opts], commandOptions) {
    super(["COPY", key, destinationKey, ...opts?.replace ? ["REPLACE"] : []], {
      ...commandOptions,
      deserialize(result) {
        if (result > 0) {
          return "COPIED";
        }
        return "NOT_COPIED";
      }
    });
  }
};
var DBSizeCommand = class extends Command {
  static {
    __name(this, "DBSizeCommand");
  }
  constructor(opts) {
    super(["dbsize"], opts);
  }
};
var DecrCommand = class extends Command {
  static {
    __name(this, "DecrCommand");
  }
  constructor(cmd, opts) {
    super(["decr", ...cmd], opts);
  }
};
var DecrByCommand = class extends Command {
  static {
    __name(this, "DecrByCommand");
  }
  constructor(cmd, opts) {
    super(["decrby", ...cmd], opts);
  }
};
var DelCommand = class extends Command {
  static {
    __name(this, "DelCommand");
  }
  constructor(cmd, opts) {
    super(["del", ...cmd], opts);
  }
};
var EchoCommand = class extends Command {
  static {
    __name(this, "EchoCommand");
  }
  constructor(cmd, opts) {
    super(["echo", ...cmd], opts);
  }
};
var EvalROCommand = class extends Command {
  static {
    __name(this, "EvalROCommand");
  }
  constructor([script, keys, args], opts) {
    super(["eval_ro", script, keys.length, ...keys, ...args ?? []], opts);
  }
};
var EvalCommand = class extends Command {
  static {
    __name(this, "EvalCommand");
  }
  constructor([script, keys, args], opts) {
    super(["eval", script, keys.length, ...keys, ...args ?? []], opts);
  }
};
var EvalshaROCommand = class extends Command {
  static {
    __name(this, "EvalshaROCommand");
  }
  constructor([sha, keys, args], opts) {
    super(["evalsha_ro", sha, keys.length, ...keys, ...args ?? []], opts);
  }
};
var EvalshaCommand = class extends Command {
  static {
    __name(this, "EvalshaCommand");
  }
  constructor([sha, keys, args], opts) {
    super(["evalsha", sha, keys.length, ...keys, ...args ?? []], opts);
  }
};
var ExistsCommand = class extends Command {
  static {
    __name(this, "ExistsCommand");
  }
  constructor(cmd, opts) {
    super(["exists", ...cmd], opts);
  }
};
var ExpireCommand = class extends Command {
  static {
    __name(this, "ExpireCommand");
  }
  constructor(cmd, opts) {
    super(["expire", ...cmd.filter(Boolean)], opts);
  }
};
var ExpireAtCommand = class extends Command {
  static {
    __name(this, "ExpireAtCommand");
  }
  constructor(cmd, opts) {
    super(["expireat", ...cmd], opts);
  }
};
var FCallCommand = class extends Command {
  static {
    __name(this, "FCallCommand");
  }
  constructor([functionName, keys, args], opts) {
    super(["fcall", functionName, ...keys ? [keys.length, ...keys] : [0], ...args ?? []], opts);
  }
};
var FCallRoCommand = class extends Command {
  static {
    __name(this, "FCallRoCommand");
  }
  constructor([functionName, keys, args], opts) {
    super(
      ["fcall_ro", functionName, ...keys ? [keys.length, ...keys] : [0], ...args ?? []],
      opts
    );
  }
};
var FlushAllCommand = class extends Command {
  static {
    __name(this, "FlushAllCommand");
  }
  constructor(args, opts) {
    const command = ["flushall"];
    if (args && args.length > 0 && args[0].async) {
      command.push("async");
    }
    super(command, opts);
  }
};
var FlushDBCommand = class extends Command {
  static {
    __name(this, "FlushDBCommand");
  }
  constructor([opts], cmdOpts) {
    const command = ["flushdb"];
    if (opts?.async) {
      command.push("async");
    }
    super(command, cmdOpts);
  }
};
var FunctionDeleteCommand = class extends Command {
  static {
    __name(this, "FunctionDeleteCommand");
  }
  constructor([libraryName], opts) {
    super(["function", "delete", libraryName], opts);
  }
};
var FunctionFlushCommand = class extends Command {
  static {
    __name(this, "FunctionFlushCommand");
  }
  constructor(opts) {
    super(["function", "flush"], opts);
  }
};
var FunctionListCommand = class extends Command {
  static {
    __name(this, "FunctionListCommand");
  }
  constructor([args], opts) {
    const command = ["function", "list"];
    if (args?.libraryName) {
      command.push("libraryname", args.libraryName);
    }
    if (args?.withCode) {
      command.push("withcode");
    }
    super(command, { deserialize: deserialize2, ...opts });
  }
};
function deserialize2(result) {
  if (!Array.isArray(result)) return [];
  return result.map((libRaw) => {
    const lib = kvArrayToObject(libRaw);
    const functionsParsed = lib.functions.map(
      (fnRaw) => kvArrayToObject(fnRaw)
    );
    return {
      libraryName: lib.library_name,
      engine: lib.engine,
      functions: functionsParsed.map((fn) => ({
        name: fn.name,
        description: fn.description ?? void 0,
        flags: fn.flags
      })),
      libraryCode: lib.library_code
    };
  });
}
__name(deserialize2, "deserialize2");
var FunctionLoadCommand = class extends Command {
  static {
    __name(this, "FunctionLoadCommand");
  }
  constructor([args], opts) {
    super(["function", "load", ...args.replace ? ["replace"] : [], args.code], opts);
  }
};
var FunctionStatsCommand = class extends Command {
  static {
    __name(this, "FunctionStatsCommand");
  }
  constructor(opts) {
    super(["function", "stats"], { deserialize: deserialize3, ...opts });
  }
};
function deserialize3(result) {
  const rawEngines = kvArrayToObject(kvArrayToObject(result).engines);
  const parsedEngines = Object.fromEntries(
    Object.entries(rawEngines).map(([key, value]) => [key, kvArrayToObject(value)])
  );
  const final = {
    engines: Object.fromEntries(
      Object.entries(parsedEngines).map(([key, value]) => [
        key,
        {
          librariesCount: value.libraries_count,
          functionsCount: value.functions_count
        }
      ])
    )
  };
  return final;
}
__name(deserialize3, "deserialize3");
var GeoAddCommand = class extends Command {
  static {
    __name(this, "GeoAddCommand");
  }
  constructor([key, arg1, ...arg2], opts) {
    const command = ["geoadd", key];
    if ("nx" in arg1 && arg1.nx) {
      command.push("nx");
    } else if ("xx" in arg1 && arg1.xx) {
      command.push("xx");
    }
    if ("ch" in arg1 && arg1.ch) {
      command.push("ch");
    }
    if ("latitude" in arg1 && arg1.latitude) {
      command.push(arg1.longitude, arg1.latitude, arg1.member);
    }
    command.push(
      ...arg2.flatMap(({ latitude, longitude, member }) => [longitude, latitude, member])
    );
    super(command, opts);
  }
};
var GeoDistCommand = class extends Command {
  static {
    __name(this, "GeoDistCommand");
  }
  constructor([key, member1, member2, unit = "M"], opts) {
    super(["GEODIST", key, member1, member2, unit], opts);
  }
};
var GeoHashCommand = class extends Command {
  static {
    __name(this, "GeoHashCommand");
  }
  constructor(cmd, opts) {
    const [key] = cmd;
    const members = Array.isArray(cmd[1]) ? cmd[1] : cmd.slice(1);
    super(["GEOHASH", key, ...members], opts);
  }
};
var GeoPosCommand = class extends Command {
  static {
    __name(this, "GeoPosCommand");
  }
  constructor(cmd, opts) {
    const [key] = cmd;
    const members = Array.isArray(cmd[1]) ? cmd[1] : cmd.slice(1);
    super(["GEOPOS", key, ...members], {
      deserialize: /* @__PURE__ */ __name((result) => transform(result), "deserialize"),
      ...opts
    });
  }
};
function transform(result) {
  const final = [];
  for (const pos of result) {
    if (!pos?.[0] || !pos?.[1]) {
      continue;
    }
    final.push({ lng: Number.parseFloat(pos[0]), lat: Number.parseFloat(pos[1]) });
  }
  return final;
}
__name(transform, "transform");
var GeoSearchCommand = class extends Command {
  static {
    __name(this, "GeoSearchCommand");
  }
  constructor([key, centerPoint, shape, order, opts], commandOptions) {
    const command = ["GEOSEARCH", key];
    if (centerPoint.type === "FROMMEMBER" || centerPoint.type === "frommember") {
      command.push(centerPoint.type, centerPoint.member);
    }
    if (centerPoint.type === "FROMLONLAT" || centerPoint.type === "fromlonlat") {
      command.push(centerPoint.type, centerPoint.coordinate.lon, centerPoint.coordinate.lat);
    }
    if (shape.type === "BYRADIUS" || shape.type === "byradius") {
      command.push(shape.type, shape.radius, shape.radiusType);
    }
    if (shape.type === "BYBOX" || shape.type === "bybox") {
      command.push(shape.type, shape.rect.width, shape.rect.height, shape.rectType);
    }
    command.push(order);
    if (opts?.count) {
      command.push("COUNT", opts.count.limit, ...opts.count.any ? ["ANY"] : []);
    }
    const transform2 = /* @__PURE__ */ __name((result) => {
      if (!opts?.withCoord && !opts?.withDist && !opts?.withHash) {
        return result.map((member) => {
          try {
            return { member: JSON.parse(member) };
          } catch {
            return { member };
          }
        });
      }
      return result.map((members) => {
        let counter = 1;
        const obj = {};
        try {
          obj.member = JSON.parse(members[0]);
        } catch {
          obj.member = members[0];
        }
        if (opts.withDist) {
          obj.dist = Number.parseFloat(members[counter++]);
        }
        if (opts.withHash) {
          obj.hash = members[counter++].toString();
        }
        if (opts.withCoord) {
          obj.coord = {
            long: Number.parseFloat(members[counter][0]),
            lat: Number.parseFloat(members[counter][1])
          };
        }
        return obj;
      });
    }, "transform2");
    super(
      [
        ...command,
        ...opts?.withCoord ? ["WITHCOORD"] : [],
        ...opts?.withDist ? ["WITHDIST"] : [],
        ...opts?.withHash ? ["WITHHASH"] : []
      ],
      {
        deserialize: transform2,
        ...commandOptions
      }
    );
  }
};
var GeoSearchStoreCommand = class extends Command {
  static {
    __name(this, "GeoSearchStoreCommand");
  }
  constructor([destination, key, centerPoint, shape, order, opts], commandOptions) {
    const command = ["GEOSEARCHSTORE", destination, key];
    if (centerPoint.type === "FROMMEMBER" || centerPoint.type === "frommember") {
      command.push(centerPoint.type, centerPoint.member);
    }
    if (centerPoint.type === "FROMLONLAT" || centerPoint.type === "fromlonlat") {
      command.push(centerPoint.type, centerPoint.coordinate.lon, centerPoint.coordinate.lat);
    }
    if (shape.type === "BYRADIUS" || shape.type === "byradius") {
      command.push(shape.type, shape.radius, shape.radiusType);
    }
    if (shape.type === "BYBOX" || shape.type === "bybox") {
      command.push(shape.type, shape.rect.width, shape.rect.height, shape.rectType);
    }
    command.push(order);
    if (opts?.count) {
      command.push("COUNT", opts.count.limit, ...opts.count.any ? ["ANY"] : []);
    }
    super([...command, ...opts?.storeDist ? ["STOREDIST"] : []], commandOptions);
  }
};
var GetCommand = class extends Command {
  static {
    __name(this, "GetCommand");
  }
  constructor(cmd, opts) {
    super(["get", ...cmd], opts);
  }
};
var GetBitCommand = class extends Command {
  static {
    __name(this, "GetBitCommand");
  }
  constructor(cmd, opts) {
    super(["getbit", ...cmd], opts);
  }
};
var GetDelCommand = class extends Command {
  static {
    __name(this, "GetDelCommand");
  }
  constructor(cmd, opts) {
    super(["getdel", ...cmd], opts);
  }
};
var GetExCommand = class extends Command {
  static {
    __name(this, "GetExCommand");
  }
  constructor([key, opts], cmdOpts) {
    const command = ["getex", key];
    if (opts) {
      if ("ex" in opts && typeof opts.ex === "number") {
        command.push("ex", opts.ex);
      } else if ("px" in opts && typeof opts.px === "number") {
        command.push("px", opts.px);
      } else if ("exat" in opts && typeof opts.exat === "number") {
        command.push("exat", opts.exat);
      } else if ("pxat" in opts && typeof opts.pxat === "number") {
        command.push("pxat", opts.pxat);
      } else if ("persist" in opts && opts.persist) {
        command.push("persist");
      }
    }
    super(command, cmdOpts);
  }
};
var GetRangeCommand = class extends Command {
  static {
    __name(this, "GetRangeCommand");
  }
  constructor(cmd, opts) {
    super(["getrange", ...cmd], opts);
  }
};
var GetSetCommand = class extends Command {
  static {
    __name(this, "GetSetCommand");
  }
  constructor(cmd, opts) {
    super(["getset", ...cmd], opts);
  }
};
var HDelCommand = class extends Command {
  static {
    __name(this, "HDelCommand");
  }
  constructor(cmd, opts) {
    super(["hdel", ...cmd], opts);
  }
};
var HExistsCommand = class extends Command {
  static {
    __name(this, "HExistsCommand");
  }
  constructor(cmd, opts) {
    super(["hexists", ...cmd], opts);
  }
};
var HExpireCommand = class extends Command {
  static {
    __name(this, "HExpireCommand");
  }
  constructor(cmd, opts) {
    const [key, fields, seconds, option] = cmd;
    const fieldArray = Array.isArray(fields) ? fields : [fields];
    super(
      [
        "hexpire",
        key,
        seconds,
        ...option ? [option] : [],
        "FIELDS",
        fieldArray.length,
        ...fieldArray
      ],
      opts
    );
  }
};
var HExpireAtCommand = class extends Command {
  static {
    __name(this, "HExpireAtCommand");
  }
  constructor(cmd, opts) {
    const [key, fields, timestamp, option] = cmd;
    const fieldArray = Array.isArray(fields) ? fields : [fields];
    super(
      [
        "hexpireat",
        key,
        timestamp,
        ...option ? [option] : [],
        "FIELDS",
        fieldArray.length,
        ...fieldArray
      ],
      opts
    );
  }
};
var HExpireTimeCommand = class extends Command {
  static {
    __name(this, "HExpireTimeCommand");
  }
  constructor(cmd, opts) {
    const [key, fields] = cmd;
    const fieldArray = Array.isArray(fields) ? fields : [fields];
    super(["hexpiretime", key, "FIELDS", fieldArray.length, ...fieldArray], opts);
  }
};
var HPersistCommand = class extends Command {
  static {
    __name(this, "HPersistCommand");
  }
  constructor(cmd, opts) {
    const [key, fields] = cmd;
    const fieldArray = Array.isArray(fields) ? fields : [fields];
    super(["hpersist", key, "FIELDS", fieldArray.length, ...fieldArray], opts);
  }
};
var HPExpireCommand = class extends Command {
  static {
    __name(this, "HPExpireCommand");
  }
  constructor(cmd, opts) {
    const [key, fields, milliseconds, option] = cmd;
    const fieldArray = Array.isArray(fields) ? fields : [fields];
    super(
      [
        "hpexpire",
        key,
        milliseconds,
        ...option ? [option] : [],
        "FIELDS",
        fieldArray.length,
        ...fieldArray
      ],
      opts
    );
  }
};
var HPExpireAtCommand = class extends Command {
  static {
    __name(this, "HPExpireAtCommand");
  }
  constructor(cmd, opts) {
    const [key, fields, timestamp, option] = cmd;
    const fieldArray = Array.isArray(fields) ? fields : [fields];
    super(
      [
        "hpexpireat",
        key,
        timestamp,
        ...option ? [option] : [],
        "FIELDS",
        fieldArray.length,
        ...fieldArray
      ],
      opts
    );
  }
};
var HPExpireTimeCommand = class extends Command {
  static {
    __name(this, "HPExpireTimeCommand");
  }
  constructor(cmd, opts) {
    const [key, fields] = cmd;
    const fieldArray = Array.isArray(fields) ? fields : [fields];
    super(["hpexpiretime", key, "FIELDS", fieldArray.length, ...fieldArray], opts);
  }
};
var HPTtlCommand = class extends Command {
  static {
    __name(this, "HPTtlCommand");
  }
  constructor(cmd, opts) {
    const [key, fields] = cmd;
    const fieldArray = Array.isArray(fields) ? fields : [fields];
    super(["hpttl", key, "FIELDS", fieldArray.length, ...fieldArray], opts);
  }
};
var HGetCommand = class extends Command {
  static {
    __name(this, "HGetCommand");
  }
  constructor(cmd, opts) {
    super(["hget", ...cmd], opts);
  }
};
function deserialize4(result) {
  if (result.length === 0) {
    return null;
  }
  const obj = {};
  for (let i = 0; i < result.length; i += 2) {
    const key = result[i];
    const value = result[i + 1];
    try {
      const valueIsNumberAndNotSafeInteger = !Number.isNaN(Number(value)) && !Number.isSafeInteger(Number(value));
      obj[key] = valueIsNumberAndNotSafeInteger ? value : JSON.parse(value);
    } catch {
      obj[key] = value;
    }
  }
  return obj;
}
__name(deserialize4, "deserialize4");
var HGetAllCommand = class extends Command {
  static {
    __name(this, "HGetAllCommand");
  }
  constructor(cmd, opts) {
    super(["hgetall", ...cmd], {
      deserialize: /* @__PURE__ */ __name((result) => deserialize4(result), "deserialize"),
      ...opts
    });
  }
};
function deserialize5(fields, result) {
  if (result.every((field) => field === null)) {
    return null;
  }
  const obj = {};
  for (const [i, field] of fields.entries()) {
    try {
      obj[field] = JSON.parse(result[i]);
    } catch {
      obj[field] = result[i];
    }
  }
  return obj;
}
__name(deserialize5, "deserialize5");
var HMGetCommand = class extends Command {
  static {
    __name(this, "HMGetCommand");
  }
  constructor([key, ...fields], opts) {
    super(["hmget", key, ...fields], {
      deserialize: /* @__PURE__ */ __name((result) => deserialize5(fields, result), "deserialize"),
      ...opts
    });
  }
};
var HGetDelCommand = class extends Command {
  static {
    __name(this, "HGetDelCommand");
  }
  constructor([key, ...fields], opts) {
    super(["hgetdel", key, "FIELDS", fields.length, ...fields], {
      deserialize: /* @__PURE__ */ __name((result) => deserialize5(fields.map(String), result), "deserialize"),
      ...opts
    });
  }
};
var HGetExCommand = class extends Command {
  static {
    __name(this, "HGetExCommand");
  }
  constructor([key, opts, ...fields], cmdOpts) {
    const command = ["hgetex", key];
    if ("ex" in opts && typeof opts.ex === "number") {
      command.push("EX", opts.ex);
    } else if ("px" in opts && typeof opts.px === "number") {
      command.push("PX", opts.px);
    } else if ("exat" in opts && typeof opts.exat === "number") {
      command.push("EXAT", opts.exat);
    } else if ("pxat" in opts && typeof opts.pxat === "number") {
      command.push("PXAT", opts.pxat);
    } else if ("persist" in opts && opts.persist) {
      command.push("PERSIST");
    }
    command.push("FIELDS", fields.length, ...fields);
    super(command, {
      deserialize: /* @__PURE__ */ __name((result) => deserialize5(fields.map(String), result), "deserialize"),
      ...cmdOpts
    });
  }
};
var HIncrByCommand = class extends Command {
  static {
    __name(this, "HIncrByCommand");
  }
  constructor(cmd, opts) {
    super(["hincrby", ...cmd], opts);
  }
};
var HIncrByFloatCommand = class extends Command {
  static {
    __name(this, "HIncrByFloatCommand");
  }
  constructor(cmd, opts) {
    super(["hincrbyfloat", ...cmd], opts);
  }
};
var HKeysCommand = class extends Command {
  static {
    __name(this, "HKeysCommand");
  }
  constructor([key], opts) {
    super(["hkeys", key], opts);
  }
};
var HLenCommand = class extends Command {
  static {
    __name(this, "HLenCommand");
  }
  constructor(cmd, opts) {
    super(["hlen", ...cmd], opts);
  }
};
var HMSetCommand = class extends Command {
  static {
    __name(this, "HMSetCommand");
  }
  constructor([key, kv], opts) {
    super(["hmset", key, ...Object.entries(kv).flatMap(([field, value]) => [field, value])], opts);
  }
};
var HScanCommand = class extends Command {
  static {
    __name(this, "HScanCommand");
  }
  constructor([key, cursor, cmdOpts], opts) {
    const command = ["hscan", key, cursor];
    if (cmdOpts?.match) {
      command.push("match", cmdOpts.match);
    }
    if (typeof cmdOpts?.count === "number") {
      command.push("count", cmdOpts.count);
    }
    super(command, {
      deserialize: deserializeScanResponse,
      ...opts
    });
  }
};
var HSetCommand = class extends Command {
  static {
    __name(this, "HSetCommand");
  }
  constructor([key, kv], opts) {
    super(["hset", key, ...Object.entries(kv).flatMap(([field, value]) => [field, value])], opts);
  }
};
var HSetExCommand = class extends Command {
  static {
    __name(this, "HSetExCommand");
  }
  constructor([key, opts, kv], cmdOpts) {
    const command = ["hsetex", key];
    if (opts.conditional) {
      command.push(opts.conditional.toUpperCase());
    }
    if (opts.expiration) {
      if ("ex" in opts.expiration && typeof opts.expiration.ex === "number") {
        command.push("EX", opts.expiration.ex);
      } else if ("px" in opts.expiration && typeof opts.expiration.px === "number") {
        command.push("PX", opts.expiration.px);
      } else if ("exat" in opts.expiration && typeof opts.expiration.exat === "number") {
        command.push("EXAT", opts.expiration.exat);
      } else if ("pxat" in opts.expiration && typeof opts.expiration.pxat === "number") {
        command.push("PXAT", opts.expiration.pxat);
      } else if ("keepttl" in opts.expiration && opts.expiration.keepttl) {
        command.push("KEEPTTL");
      }
    }
    const entries = Object.entries(kv);
    command.push("FIELDS", entries.length);
    for (const [field, value] of entries) {
      command.push(field, value);
    }
    super(command, cmdOpts);
  }
};
var HSetNXCommand = class extends Command {
  static {
    __name(this, "HSetNXCommand");
  }
  constructor(cmd, opts) {
    super(["hsetnx", ...cmd], opts);
  }
};
var HStrLenCommand = class extends Command {
  static {
    __name(this, "HStrLenCommand");
  }
  constructor(cmd, opts) {
    super(["hstrlen", ...cmd], opts);
  }
};
var HTtlCommand = class extends Command {
  static {
    __name(this, "HTtlCommand");
  }
  constructor(cmd, opts) {
    const [key, fields] = cmd;
    const fieldArray = Array.isArray(fields) ? fields : [fields];
    super(["httl", key, "FIELDS", fieldArray.length, ...fieldArray], opts);
  }
};
var HValsCommand = class extends Command {
  static {
    __name(this, "HValsCommand");
  }
  constructor(cmd, opts) {
    super(["hvals", ...cmd], opts);
  }
};
var IncrCommand = class extends Command {
  static {
    __name(this, "IncrCommand");
  }
  constructor(cmd, opts) {
    super(["incr", ...cmd], opts);
  }
};
var IncrByCommand = class extends Command {
  static {
    __name(this, "IncrByCommand");
  }
  constructor(cmd, opts) {
    super(["incrby", ...cmd], opts);
  }
};
var IncrByFloatCommand = class extends Command {
  static {
    __name(this, "IncrByFloatCommand");
  }
  constructor(cmd, opts) {
    super(["incrbyfloat", ...cmd], opts);
  }
};
var JsonArrAppendCommand = class extends Command {
  static {
    __name(this, "JsonArrAppendCommand");
  }
  constructor(cmd, opts) {
    super(["JSON.ARRAPPEND", ...cmd], opts);
  }
};
var JsonArrIndexCommand = class extends Command {
  static {
    __name(this, "JsonArrIndexCommand");
  }
  constructor(cmd, opts) {
    super(["JSON.ARRINDEX", ...cmd], opts);
  }
};
var JsonArrInsertCommand = class extends Command {
  static {
    __name(this, "JsonArrInsertCommand");
  }
  constructor(cmd, opts) {
    super(["JSON.ARRINSERT", ...cmd], opts);
  }
};
var JsonArrLenCommand = class extends Command {
  static {
    __name(this, "JsonArrLenCommand");
  }
  constructor(cmd, opts) {
    super(["JSON.ARRLEN", cmd[0], cmd[1] ?? "$"], opts);
  }
};
var JsonArrPopCommand = class extends Command {
  static {
    __name(this, "JsonArrPopCommand");
  }
  constructor(cmd, opts) {
    super(["JSON.ARRPOP", ...cmd], opts);
  }
};
var JsonArrTrimCommand = class extends Command {
  static {
    __name(this, "JsonArrTrimCommand");
  }
  constructor(cmd, opts) {
    const path = cmd[1] ?? "$";
    const start = cmd[2] ?? 0;
    const stop = cmd[3] ?? 0;
    super(["JSON.ARRTRIM", cmd[0], path, start, stop], opts);
  }
};
var JsonClearCommand = class extends Command {
  static {
    __name(this, "JsonClearCommand");
  }
  constructor(cmd, opts) {
    super(["JSON.CLEAR", ...cmd], opts);
  }
};
var JsonDelCommand = class extends Command {
  static {
    __name(this, "JsonDelCommand");
  }
  constructor(cmd, opts) {
    super(["JSON.DEL", ...cmd], opts);
  }
};
var JsonForgetCommand = class extends Command {
  static {
    __name(this, "JsonForgetCommand");
  }
  constructor(cmd, opts) {
    super(["JSON.FORGET", ...cmd], opts);
  }
};
var JsonGetCommand = class extends Command {
  static {
    __name(this, "JsonGetCommand");
  }
  constructor(cmd, opts) {
    const command = ["JSON.GET"];
    if (typeof cmd[1] === "string") {
      command.push(...cmd);
    } else {
      command.push(cmd[0]);
      if (cmd[1]) {
        if (cmd[1].indent) {
          command.push("INDENT", cmd[1].indent);
        }
        if (cmd[1].newline) {
          command.push("NEWLINE", cmd[1].newline);
        }
        if (cmd[1].space) {
          command.push("SPACE", cmd[1].space);
        }
      }
      command.push(...cmd.slice(2));
    }
    super(command, opts);
  }
};
var JsonMergeCommand = class extends Command {
  static {
    __name(this, "JsonMergeCommand");
  }
  constructor(cmd, opts) {
    const command = ["JSON.MERGE", ...cmd];
    super(command, opts);
  }
};
var JsonMGetCommand = class extends Command {
  static {
    __name(this, "JsonMGetCommand");
  }
  constructor(cmd, opts) {
    super(["JSON.MGET", ...cmd[0], cmd[1]], opts);
  }
};
var JsonMSetCommand = class extends Command {
  static {
    __name(this, "JsonMSetCommand");
  }
  constructor(cmd, opts) {
    const command = ["JSON.MSET"];
    for (const c of cmd) {
      command.push(c.key, c.path, c.value);
    }
    super(command, opts);
  }
};
var JsonNumIncrByCommand = class extends Command {
  static {
    __name(this, "JsonNumIncrByCommand");
  }
  constructor(cmd, opts) {
    super(["JSON.NUMINCRBY", ...cmd], opts);
  }
};
var JsonNumMultByCommand = class extends Command {
  static {
    __name(this, "JsonNumMultByCommand");
  }
  constructor(cmd, opts) {
    super(["JSON.NUMMULTBY", ...cmd], opts);
  }
};
var JsonObjKeysCommand = class extends Command {
  static {
    __name(this, "JsonObjKeysCommand");
  }
  constructor(cmd, opts) {
    super(["JSON.OBJKEYS", ...cmd], opts);
  }
};
var JsonObjLenCommand = class extends Command {
  static {
    __name(this, "JsonObjLenCommand");
  }
  constructor(cmd, opts) {
    super(["JSON.OBJLEN", ...cmd], opts);
  }
};
var JsonRespCommand = class extends Command {
  static {
    __name(this, "JsonRespCommand");
  }
  constructor(cmd, opts) {
    super(["JSON.RESP", ...cmd], opts);
  }
};
var JsonSetCommand = class extends Command {
  static {
    __name(this, "JsonSetCommand");
  }
  constructor(cmd, opts) {
    const command = ["JSON.SET", cmd[0], cmd[1], cmd[2]];
    if (cmd[3]) {
      if (cmd[3].nx) {
        command.push("NX");
      } else if (cmd[3].xx) {
        command.push("XX");
      }
    }
    super(command, opts);
  }
};
var JsonStrAppendCommand = class extends Command {
  static {
    __name(this, "JsonStrAppendCommand");
  }
  constructor(cmd, opts) {
    super(["JSON.STRAPPEND", ...cmd], opts);
  }
};
var JsonStrLenCommand = class extends Command {
  static {
    __name(this, "JsonStrLenCommand");
  }
  constructor(cmd, opts) {
    super(["JSON.STRLEN", ...cmd], opts);
  }
};
var JsonToggleCommand = class extends Command {
  static {
    __name(this, "JsonToggleCommand");
  }
  constructor(cmd, opts) {
    super(["JSON.TOGGLE", ...cmd], opts);
  }
};
var JsonTypeCommand = class extends Command {
  static {
    __name(this, "JsonTypeCommand");
  }
  constructor(cmd, opts) {
    super(["JSON.TYPE", ...cmd], opts);
  }
};
var KeysCommand = class extends Command {
  static {
    __name(this, "KeysCommand");
  }
  constructor(cmd, opts) {
    super(["keys", ...cmd], opts);
  }
};
var LIndexCommand = class extends Command {
  static {
    __name(this, "LIndexCommand");
  }
  constructor(cmd, opts) {
    super(["lindex", ...cmd], opts);
  }
};
var LInsertCommand = class extends Command {
  static {
    __name(this, "LInsertCommand");
  }
  constructor(cmd, opts) {
    super(["linsert", ...cmd], opts);
  }
};
var LLenCommand = class extends Command {
  static {
    __name(this, "LLenCommand");
  }
  constructor(cmd, opts) {
    super(["llen", ...cmd], opts);
  }
};
var LMoveCommand = class extends Command {
  static {
    __name(this, "LMoveCommand");
  }
  constructor(cmd, opts) {
    super(["lmove", ...cmd], opts);
  }
};
var LmPopCommand = class extends Command {
  static {
    __name(this, "LmPopCommand");
  }
  constructor(cmd, opts) {
    const [numkeys, keys, direction, count3] = cmd;
    super(["LMPOP", numkeys, ...keys, direction, ...count3 ? ["COUNT", count3] : []], opts);
  }
};
var LPopCommand = class extends Command {
  static {
    __name(this, "LPopCommand");
  }
  constructor(cmd, opts) {
    super(["lpop", ...cmd], opts);
  }
};
var LPosCommand = class extends Command {
  static {
    __name(this, "LPosCommand");
  }
  constructor(cmd, opts) {
    const args = ["lpos", cmd[0], cmd[1]];
    if (typeof cmd[2]?.rank === "number") {
      args.push("rank", cmd[2].rank);
    }
    if (typeof cmd[2]?.count === "number") {
      args.push("count", cmd[2].count);
    }
    if (typeof cmd[2]?.maxLen === "number") {
      args.push("maxLen", cmd[2].maxLen);
    }
    super(args, opts);
  }
};
var LPushCommand = class extends Command {
  static {
    __name(this, "LPushCommand");
  }
  constructor(cmd, opts) {
    super(["lpush", ...cmd], opts);
  }
};
var LPushXCommand = class extends Command {
  static {
    __name(this, "LPushXCommand");
  }
  constructor(cmd, opts) {
    super(["lpushx", ...cmd], opts);
  }
};
var LRangeCommand = class extends Command {
  static {
    __name(this, "LRangeCommand");
  }
  constructor(cmd, opts) {
    super(["lrange", ...cmd], opts);
  }
};
var LRemCommand = class extends Command {
  static {
    __name(this, "LRemCommand");
  }
  constructor(cmd, opts) {
    super(["lrem", ...cmd], opts);
  }
};
var LSetCommand = class extends Command {
  static {
    __name(this, "LSetCommand");
  }
  constructor(cmd, opts) {
    super(["lset", ...cmd], opts);
  }
};
var LTrimCommand = class extends Command {
  static {
    __name(this, "LTrimCommand");
  }
  constructor(cmd, opts) {
    super(["ltrim", ...cmd], opts);
  }
};
var MGetCommand = class extends Command {
  static {
    __name(this, "MGetCommand");
  }
  constructor(cmd, opts) {
    const keys = Array.isArray(cmd[0]) ? cmd[0] : cmd;
    super(["mget", ...keys], opts);
  }
};
var MSetCommand = class extends Command {
  static {
    __name(this, "MSetCommand");
  }
  constructor([kv], opts) {
    super(["mset", ...Object.entries(kv).flatMap(([key, value]) => [key, value])], opts);
  }
};
var MSetNXCommand = class extends Command {
  static {
    __name(this, "MSetNXCommand");
  }
  constructor([kv], opts) {
    super(["msetnx", ...Object.entries(kv).flat()], opts);
  }
};
var PersistCommand = class extends Command {
  static {
    __name(this, "PersistCommand");
  }
  constructor(cmd, opts) {
    super(["persist", ...cmd], opts);
  }
};
var PExpireCommand = class extends Command {
  static {
    __name(this, "PExpireCommand");
  }
  constructor(cmd, opts) {
    super(["pexpire", ...cmd], opts);
  }
};
var PExpireAtCommand = class extends Command {
  static {
    __name(this, "PExpireAtCommand");
  }
  constructor(cmd, opts) {
    super(["pexpireat", ...cmd], opts);
  }
};
var PfAddCommand = class extends Command {
  static {
    __name(this, "PfAddCommand");
  }
  constructor(cmd, opts) {
    super(["pfadd", ...cmd], opts);
  }
};
var PfCountCommand = class extends Command {
  static {
    __name(this, "PfCountCommand");
  }
  constructor(cmd, opts) {
    super(["pfcount", ...cmd], opts);
  }
};
var PfMergeCommand = class extends Command {
  static {
    __name(this, "PfMergeCommand");
  }
  constructor(cmd, opts) {
    super(["pfmerge", ...cmd], opts);
  }
};
var PingCommand = class extends Command {
  static {
    __name(this, "PingCommand");
  }
  constructor(cmd, opts) {
    const command = ["ping"];
    if (cmd?.[0] !== void 0) {
      command.push(cmd[0]);
    }
    super(command, opts);
  }
};
var PSetEXCommand = class extends Command {
  static {
    __name(this, "PSetEXCommand");
  }
  constructor(cmd, opts) {
    super(["psetex", ...cmd], opts);
  }
};
var PTtlCommand = class extends Command {
  static {
    __name(this, "PTtlCommand");
  }
  constructor(cmd, opts) {
    super(["pttl", ...cmd], opts);
  }
};
var PublishCommand = class extends Command {
  static {
    __name(this, "PublishCommand");
  }
  constructor(cmd, opts) {
    super(["publish", ...cmd], opts);
  }
};
var RandomKeyCommand = class extends Command {
  static {
    __name(this, "RandomKeyCommand");
  }
  constructor(opts) {
    super(["randomkey"], opts);
  }
};
var RenameCommand = class extends Command {
  static {
    __name(this, "RenameCommand");
  }
  constructor(cmd, opts) {
    super(["rename", ...cmd], opts);
  }
};
var RenameNXCommand = class extends Command {
  static {
    __name(this, "RenameNXCommand");
  }
  constructor(cmd, opts) {
    super(["renamenx", ...cmd], opts);
  }
};
var RPopCommand = class extends Command {
  static {
    __name(this, "RPopCommand");
  }
  constructor(cmd, opts) {
    super(["rpop", ...cmd], opts);
  }
};
var RPushCommand = class extends Command {
  static {
    __name(this, "RPushCommand");
  }
  constructor(cmd, opts) {
    super(["rpush", ...cmd], opts);
  }
};
var RPushXCommand = class extends Command {
  static {
    __name(this, "RPushXCommand");
  }
  constructor(cmd, opts) {
    super(["rpushx", ...cmd], opts);
  }
};
var SAddCommand = class extends Command {
  static {
    __name(this, "SAddCommand");
  }
  constructor(cmd, opts) {
    super(["sadd", ...cmd], opts);
  }
};
var ScanCommand = class extends Command {
  static {
    __name(this, "ScanCommand");
  }
  constructor([cursor, opts], cmdOpts) {
    const command = ["scan", cursor];
    if (opts?.match) {
      command.push("match", opts.match);
    }
    if (typeof opts?.count === "number") {
      command.push("count", opts.count);
    }
    if (opts && "withType" in opts && opts.withType === true) {
      command.push("withtype");
    } else if (opts && "type" in opts && opts.type && opts.type.length > 0) {
      command.push("type", opts.type);
    }
    super(command, {
      // @ts-expect-error ignore types here
      deserialize: opts?.withType ? deserializeScanWithTypesResponse : deserializeScanResponse,
      ...cmdOpts
    });
  }
};
var SCardCommand = class extends Command {
  static {
    __name(this, "SCardCommand");
  }
  constructor(cmd, opts) {
    super(["scard", ...cmd], opts);
  }
};
var ScriptExistsCommand = class extends Command {
  static {
    __name(this, "ScriptExistsCommand");
  }
  constructor(hashes, opts) {
    super(["script", "exists", ...hashes], {
      deserialize: /* @__PURE__ */ __name((result) => result, "deserialize"),
      ...opts
    });
  }
};
var ScriptFlushCommand = class extends Command {
  static {
    __name(this, "ScriptFlushCommand");
  }
  constructor([opts], cmdOpts) {
    const cmd = ["script", "flush"];
    if (opts?.sync) {
      cmd.push("sync");
    } else if (opts?.async) {
      cmd.push("async");
    }
    super(cmd, cmdOpts);
  }
};
var ScriptLoadCommand = class extends Command {
  static {
    __name(this, "ScriptLoadCommand");
  }
  constructor(args, opts) {
    super(["script", "load", ...args], opts);
  }
};
var SDiffCommand = class extends Command {
  static {
    __name(this, "SDiffCommand");
  }
  constructor(cmd, opts) {
    super(["sdiff", ...cmd], opts);
  }
};
var SDiffStoreCommand = class extends Command {
  static {
    __name(this, "SDiffStoreCommand");
  }
  constructor(cmd, opts) {
    super(["sdiffstore", ...cmd], opts);
  }
};
var SetCommand = class extends Command {
  static {
    __name(this, "SetCommand");
  }
  constructor([key, value, opts], cmdOpts) {
    const command = ["set", key, value];
    if (opts) {
      if ("nx" in opts && opts.nx) {
        command.push("nx");
      } else if ("xx" in opts && opts.xx) {
        command.push("xx");
      }
      if ("get" in opts && opts.get) {
        command.push("get");
      }
      if ("ex" in opts && typeof opts.ex === "number") {
        command.push("ex", opts.ex);
      } else if ("px" in opts && typeof opts.px === "number") {
        command.push("px", opts.px);
      } else if ("exat" in opts && typeof opts.exat === "number") {
        command.push("exat", opts.exat);
      } else if ("pxat" in opts && typeof opts.pxat === "number") {
        command.push("pxat", opts.pxat);
      } else if ("keepTtl" in opts && opts.keepTtl) {
        command.push("keepTtl");
      }
    }
    super(command, cmdOpts);
  }
};
var SetBitCommand = class extends Command {
  static {
    __name(this, "SetBitCommand");
  }
  constructor(cmd, opts) {
    super(["setbit", ...cmd], opts);
  }
};
var SetExCommand = class extends Command {
  static {
    __name(this, "SetExCommand");
  }
  constructor(cmd, opts) {
    super(["setex", ...cmd], opts);
  }
};
var SetNxCommand = class extends Command {
  static {
    __name(this, "SetNxCommand");
  }
  constructor(cmd, opts) {
    super(["setnx", ...cmd], opts);
  }
};
var SetRangeCommand = class extends Command {
  static {
    __name(this, "SetRangeCommand");
  }
  constructor(cmd, opts) {
    super(["setrange", ...cmd], opts);
  }
};
var SInterCommand = class extends Command {
  static {
    __name(this, "SInterCommand");
  }
  constructor(cmd, opts) {
    super(["sinter", ...cmd], opts);
  }
};
var SInterCardCommand = class extends Command {
  static {
    __name(this, "SInterCardCommand");
  }
  constructor(cmd, cmdOpts) {
    const [keys, opts] = cmd;
    const command = ["sintercard", keys.length, ...keys];
    if (opts?.limit !== void 0) {
      command.push("LIMIT", opts.limit);
    }
    super(command, cmdOpts);
  }
};
var SInterStoreCommand = class extends Command {
  static {
    __name(this, "SInterStoreCommand");
  }
  constructor(cmd, opts) {
    super(["sinterstore", ...cmd], opts);
  }
};
var SIsMemberCommand = class extends Command {
  static {
    __name(this, "SIsMemberCommand");
  }
  constructor(cmd, opts) {
    super(["sismember", ...cmd], opts);
  }
};
var SMembersCommand = class extends Command {
  static {
    __name(this, "SMembersCommand");
  }
  constructor(cmd, opts) {
    super(["smembers", ...cmd], opts);
  }
};
var SMIsMemberCommand = class extends Command {
  static {
    __name(this, "SMIsMemberCommand");
  }
  constructor(cmd, opts) {
    super(["smismember", cmd[0], ...cmd[1]], opts);
  }
};
var SMoveCommand = class extends Command {
  static {
    __name(this, "SMoveCommand");
  }
  constructor(cmd, opts) {
    super(["smove", ...cmd], opts);
  }
};
var SPopCommand = class extends Command {
  static {
    __name(this, "SPopCommand");
  }
  constructor([key, count3], opts) {
    const command = ["spop", key];
    if (typeof count3 === "number") {
      command.push(count3);
    }
    super(command, opts);
  }
};
var SRandMemberCommand = class extends Command {
  static {
    __name(this, "SRandMemberCommand");
  }
  constructor([key, count3], opts) {
    const command = ["srandmember", key];
    if (typeof count3 === "number") {
      command.push(count3);
    }
    super(command, opts);
  }
};
var SRemCommand = class extends Command {
  static {
    __name(this, "SRemCommand");
  }
  constructor(cmd, opts) {
    super(["srem", ...cmd], opts);
  }
};
var SScanCommand = class extends Command {
  static {
    __name(this, "SScanCommand");
  }
  constructor([key, cursor, opts], cmdOpts) {
    const command = ["sscan", key, cursor];
    if (opts?.match) {
      command.push("match", opts.match);
    }
    if (typeof opts?.count === "number") {
      command.push("count", opts.count);
    }
    super(command, {
      deserialize: deserializeScanResponse,
      ...cmdOpts
    });
  }
};
var StrLenCommand = class extends Command {
  static {
    __name(this, "StrLenCommand");
  }
  constructor(cmd, opts) {
    super(["strlen", ...cmd], opts);
  }
};
var SUnionCommand = class extends Command {
  static {
    __name(this, "SUnionCommand");
  }
  constructor(cmd, opts) {
    super(["sunion", ...cmd], opts);
  }
};
var SUnionStoreCommand = class extends Command {
  static {
    __name(this, "SUnionStoreCommand");
  }
  constructor(cmd, opts) {
    super(["sunionstore", ...cmd], opts);
  }
};
var TimeCommand = class extends Command {
  static {
    __name(this, "TimeCommand");
  }
  constructor(opts) {
    super(["time"], opts);
  }
};
var TouchCommand = class extends Command {
  static {
    __name(this, "TouchCommand");
  }
  constructor(cmd, opts) {
    super(["touch", ...cmd], opts);
  }
};
var TtlCommand = class extends Command {
  static {
    __name(this, "TtlCommand");
  }
  constructor(cmd, opts) {
    super(["ttl", ...cmd], opts);
  }
};
var TypeCommand = class extends Command {
  static {
    __name(this, "TypeCommand");
  }
  constructor(cmd, opts) {
    super(["type", ...cmd], opts);
  }
};
var UnlinkCommand = class extends Command {
  static {
    __name(this, "UnlinkCommand");
  }
  constructor(cmd, opts) {
    super(["unlink", ...cmd], opts);
  }
};
var XAckCommand = class extends Command {
  static {
    __name(this, "XAckCommand");
  }
  constructor([key, group3, id], opts) {
    const ids = Array.isArray(id) ? [...id] : [id];
    super(["XACK", key, group3, ...ids], opts);
  }
};
var XAckDelCommand = class extends Command {
  static {
    __name(this, "XAckDelCommand");
  }
  constructor([key, group3, opts, ...ids], cmdOpts) {
    const command = ["XACKDEL", key, group3];
    command.push(opts.toUpperCase(), "IDS", ids.length, ...ids);
    super(command, cmdOpts);
  }
};
var XAddCommand = class extends Command {
  static {
    __name(this, "XAddCommand");
  }
  constructor([key, id, entries, opts], commandOptions) {
    const command = ["XADD", key];
    if (opts) {
      if (opts.nomkStream) {
        command.push("NOMKSTREAM");
      }
      if (opts.trim) {
        command.push(opts.trim.type, opts.trim.comparison, opts.trim.threshold);
        if (opts.trim.limit !== void 0) {
          command.push("LIMIT", opts.trim.limit);
        }
      }
    }
    command.push(id);
    for (const [k, v] of Object.entries(entries)) {
      command.push(k, v);
    }
    super(command, commandOptions);
  }
};
var XAutoClaim = class extends Command {
  static {
    __name(this, "XAutoClaim");
  }
  constructor([key, group3, consumer, minIdleTime, start, options], opts) {
    const commands = [];
    if (options?.count) {
      commands.push("COUNT", options.count);
    }
    if (options?.justId) {
      commands.push("JUSTID");
    }
    super(["XAUTOCLAIM", key, group3, consumer, minIdleTime, start, ...commands], opts);
  }
};
var XClaimCommand = class extends Command {
  static {
    __name(this, "XClaimCommand");
  }
  constructor([key, group3, consumer, minIdleTime, id, options], opts) {
    const ids = Array.isArray(id) ? [...id] : [id];
    const commands = [];
    if (options?.idleMS) {
      commands.push("IDLE", options.idleMS);
    }
    if (options?.idleMS) {
      commands.push("TIME", options.timeMS);
    }
    if (options?.retryCount) {
      commands.push("RETRYCOUNT", options.retryCount);
    }
    if (options?.force) {
      commands.push("FORCE");
    }
    if (options?.justId) {
      commands.push("JUSTID");
    }
    if (options?.lastId) {
      commands.push("LASTID", options.lastId);
    }
    super(["XCLAIM", key, group3, consumer, minIdleTime, ...ids, ...commands], opts);
  }
};
var XDelCommand = class extends Command {
  static {
    __name(this, "XDelCommand");
  }
  constructor([key, ids], opts) {
    const cmds = Array.isArray(ids) ? [...ids] : [ids];
    super(["XDEL", key, ...cmds], opts);
  }
};
var XDelExCommand = class extends Command {
  static {
    __name(this, "XDelExCommand");
  }
  constructor([key, opts, ...ids], cmdOpts) {
    const command = ["XDELEX", key];
    if (opts) {
      command.push(opts.toUpperCase());
    }
    command.push("IDS", ids.length, ...ids);
    super(command, cmdOpts);
  }
};
var XGroupCommand = class extends Command {
  static {
    __name(this, "XGroupCommand");
  }
  constructor([key, opts], commandOptions) {
    const command = ["XGROUP"];
    switch (opts.type) {
      case "CREATE": {
        command.push("CREATE", key, opts.group, opts.id);
        if (opts.options) {
          if (opts.options.MKSTREAM) {
            command.push("MKSTREAM");
          }
          if (opts.options.ENTRIESREAD !== void 0) {
            command.push("ENTRIESREAD", opts.options.ENTRIESREAD.toString());
          }
        }
        break;
      }
      case "CREATECONSUMER": {
        command.push("CREATECONSUMER", key, opts.group, opts.consumer);
        break;
      }
      case "DELCONSUMER": {
        command.push("DELCONSUMER", key, opts.group, opts.consumer);
        break;
      }
      case "DESTROY": {
        command.push("DESTROY", key, opts.group);
        break;
      }
      case "SETID": {
        command.push("SETID", key, opts.group, opts.id);
        if (opts.options?.ENTRIESREAD !== void 0) {
          command.push("ENTRIESREAD", opts.options.ENTRIESREAD.toString());
        }
        break;
      }
      default: {
        throw new Error("Invalid XGROUP");
      }
    }
    super(command, commandOptions);
  }
};
var XInfoCommand = class extends Command {
  static {
    __name(this, "XInfoCommand");
  }
  constructor([key, options], opts) {
    const cmds = [];
    if (options.type === "CONSUMERS") {
      cmds.push("CONSUMERS", key, options.group);
    } else {
      cmds.push("GROUPS", key);
    }
    super(["XINFO", ...cmds], opts);
  }
};
var XLenCommand = class extends Command {
  static {
    __name(this, "XLenCommand");
  }
  constructor(cmd, opts) {
    super(["XLEN", ...cmd], opts);
  }
};
var XPendingCommand = class extends Command {
  static {
    __name(this, "XPendingCommand");
  }
  constructor([key, group3, start, end, count3, options], opts) {
    const consumers = options?.consumer === void 0 ? [] : Array.isArray(options.consumer) ? [...options.consumer] : [options.consumer];
    super(
      [
        "XPENDING",
        key,
        group3,
        ...options?.idleTime ? ["IDLE", options.idleTime] : [],
        start,
        end,
        count3,
        ...consumers
      ],
      opts
    );
  }
};
function deserialize6(result) {
  const obj = {};
  for (const e of result) {
    for (let i = 0; i < e.length; i += 2) {
      const streamId = e[i];
      const entries = e[i + 1];
      if (!(streamId in obj)) {
        obj[streamId] = {};
      }
      for (let j = 0; j < entries.length; j += 2) {
        const field = entries[j];
        const value = entries[j + 1];
        try {
          obj[streamId][field] = JSON.parse(value);
        } catch {
          obj[streamId][field] = value;
        }
      }
    }
  }
  return obj;
}
__name(deserialize6, "deserialize6");
var XRangeCommand = class extends Command {
  static {
    __name(this, "XRangeCommand");
  }
  constructor([key, start, end, count3], opts) {
    const command = ["XRANGE", key, start, end];
    if (typeof count3 === "number") {
      command.push("COUNT", count3);
    }
    super(command, {
      deserialize: /* @__PURE__ */ __name((result) => deserialize6(result), "deserialize"),
      ...opts
    });
  }
};
var UNBALANCED_XREAD_ERR = "ERR Unbalanced XREAD list of streams: for each stream key an ID or '$' must be specified";
var XReadCommand = class extends Command {
  static {
    __name(this, "XReadCommand");
  }
  constructor([key, id, options], opts) {
    if (Array.isArray(key) && Array.isArray(id) && key.length !== id.length) {
      throw new Error(UNBALANCED_XREAD_ERR);
    }
    const commands = [];
    if (typeof options?.count === "number") {
      commands.push("COUNT", options.count);
    }
    if (typeof options?.blockMS === "number") {
      commands.push("BLOCK", options.blockMS);
    }
    commands.push(
      "STREAMS",
      ...Array.isArray(key) ? [...key] : [key],
      ...Array.isArray(id) ? [...id] : [id]
    );
    super(["XREAD", ...commands], opts);
  }
};
var UNBALANCED_XREADGROUP_ERR = "ERR Unbalanced XREADGROUP list of streams: for each stream key an ID or '$' must be specified";
var XReadGroupCommand = class extends Command {
  static {
    __name(this, "XReadGroupCommand");
  }
  constructor([group3, consumer, key, id, options], opts) {
    if (Array.isArray(key) && Array.isArray(id) && key.length !== id.length) {
      throw new Error(UNBALANCED_XREADGROUP_ERR);
    }
    const commands = [];
    if (typeof options?.count === "number") {
      commands.push("COUNT", options.count);
    }
    if (typeof options?.blockMS === "number") {
      commands.push("BLOCK", options.blockMS);
    }
    if (typeof options?.NOACK === "boolean" && options.NOACK) {
      commands.push("NOACK");
    }
    commands.push(
      "STREAMS",
      ...Array.isArray(key) ? [...key] : [key],
      ...Array.isArray(id) ? [...id] : [id]
    );
    super(["XREADGROUP", "GROUP", group3, consumer, ...commands], opts);
  }
};
var XRevRangeCommand = class extends Command {
  static {
    __name(this, "XRevRangeCommand");
  }
  constructor([key, end, start, count3], opts) {
    const command = ["XREVRANGE", key, end, start];
    if (typeof count3 === "number") {
      command.push("COUNT", count3);
    }
    super(command, {
      deserialize: /* @__PURE__ */ __name((result) => deserialize7(result), "deserialize"),
      ...opts
    });
  }
};
function deserialize7(result) {
  const obj = {};
  for (const e of result) {
    for (let i = 0; i < e.length; i += 2) {
      const streamId = e[i];
      const entries = e[i + 1];
      if (!(streamId in obj)) {
        obj[streamId] = {};
      }
      for (let j = 0; j < entries.length; j += 2) {
        const field = entries[j];
        const value = entries[j + 1];
        try {
          obj[streamId][field] = JSON.parse(value);
        } catch {
          obj[streamId][field] = value;
        }
      }
    }
  }
  return obj;
}
__name(deserialize7, "deserialize7");
var XTrimCommand = class extends Command {
  static {
    __name(this, "XTrimCommand");
  }
  constructor([key, options], opts) {
    const { limit, strategy, threshold, exactness = "~" } = options;
    super(["XTRIM", key, strategy, exactness, threshold, ...limit ? ["LIMIT", limit] : []], opts);
  }
};
var ZAddCommand = class extends Command {
  static {
    __name(this, "ZAddCommand");
  }
  constructor([key, arg1, ...arg2], opts) {
    const command = ["zadd", key];
    if ("nx" in arg1 && arg1.nx) {
      command.push("nx");
    } else if ("xx" in arg1 && arg1.xx) {
      command.push("xx");
    }
    if ("ch" in arg1 && arg1.ch) {
      command.push("ch");
    }
    if ("incr" in arg1 && arg1.incr) {
      command.push("incr");
    }
    if ("lt" in arg1 && arg1.lt) {
      command.push("lt");
    } else if ("gt" in arg1 && arg1.gt) {
      command.push("gt");
    }
    if ("score" in arg1 && "member" in arg1) {
      command.push(arg1.score, arg1.member);
    }
    command.push(...arg2.flatMap(({ score, member }) => [score, member]));
    super(command, opts);
  }
};
var ZCardCommand = class extends Command {
  static {
    __name(this, "ZCardCommand");
  }
  constructor(cmd, opts) {
    super(["zcard", ...cmd], opts);
  }
};
var ZCountCommand = class extends Command {
  static {
    __name(this, "ZCountCommand");
  }
  constructor(cmd, opts) {
    super(["zcount", ...cmd], opts);
  }
};
var ZIncrByCommand = class extends Command {
  static {
    __name(this, "ZIncrByCommand");
  }
  constructor(cmd, opts) {
    super(["zincrby", ...cmd], opts);
  }
};
var ZInterStoreCommand = class extends Command {
  static {
    __name(this, "ZInterStoreCommand");
  }
  constructor([destination, numKeys, keyOrKeys, opts], cmdOpts) {
    const command = ["zinterstore", destination, numKeys];
    if (Array.isArray(keyOrKeys)) {
      command.push(...keyOrKeys);
    } else {
      command.push(keyOrKeys);
    }
    if (opts) {
      if ("weights" in opts && opts.weights) {
        command.push("weights", ...opts.weights);
      } else if ("weight" in opts && typeof opts.weight === "number") {
        command.push("weights", opts.weight);
      }
      if ("aggregate" in opts) {
        command.push("aggregate", opts.aggregate);
      }
    }
    super(command, cmdOpts);
  }
};
var ZLexCountCommand = class extends Command {
  static {
    __name(this, "ZLexCountCommand");
  }
  constructor(cmd, opts) {
    super(["zlexcount", ...cmd], opts);
  }
};
var ZPopMaxCommand = class extends Command {
  static {
    __name(this, "ZPopMaxCommand");
  }
  constructor([key, count3], opts) {
    const command = ["zpopmax", key];
    if (typeof count3 === "number") {
      command.push(count3);
    }
    super(command, opts);
  }
};
var ZPopMinCommand = class extends Command {
  static {
    __name(this, "ZPopMinCommand");
  }
  constructor([key, count3], opts) {
    const command = ["zpopmin", key];
    if (typeof count3 === "number") {
      command.push(count3);
    }
    super(command, opts);
  }
};
var ZRangeCommand = class extends Command {
  static {
    __name(this, "ZRangeCommand");
  }
  constructor([key, min, max, opts], cmdOpts) {
    const command = ["zrange", key, min, max];
    if (opts?.byScore) {
      command.push("byscore");
    }
    if (opts?.byLex) {
      command.push("bylex");
    }
    if (opts?.rev) {
      command.push("rev");
    }
    if (opts?.count !== void 0 && opts.offset !== void 0) {
      command.push("limit", opts.offset, opts.count);
    }
    if (opts?.withScores) {
      command.push("withscores");
    }
    super(command, cmdOpts);
  }
};
var ZRankCommand = class extends Command {
  static {
    __name(this, "ZRankCommand");
  }
  constructor(cmd, opts) {
    super(["zrank", ...cmd], opts);
  }
};
var ZRemCommand = class extends Command {
  static {
    __name(this, "ZRemCommand");
  }
  constructor(cmd, opts) {
    super(["zrem", ...cmd], opts);
  }
};
var ZRemRangeByLexCommand = class extends Command {
  static {
    __name(this, "ZRemRangeByLexCommand");
  }
  constructor(cmd, opts) {
    super(["zremrangebylex", ...cmd], opts);
  }
};
var ZRemRangeByRankCommand = class extends Command {
  static {
    __name(this, "ZRemRangeByRankCommand");
  }
  constructor(cmd, opts) {
    super(["zremrangebyrank", ...cmd], opts);
  }
};
var ZRemRangeByScoreCommand = class extends Command {
  static {
    __name(this, "ZRemRangeByScoreCommand");
  }
  constructor(cmd, opts) {
    super(["zremrangebyscore", ...cmd], opts);
  }
};
var ZRevRankCommand = class extends Command {
  static {
    __name(this, "ZRevRankCommand");
  }
  constructor(cmd, opts) {
    super(["zrevrank", ...cmd], opts);
  }
};
var ZScanCommand = class extends Command {
  static {
    __name(this, "ZScanCommand");
  }
  constructor([key, cursor, opts], cmdOpts) {
    const command = ["zscan", key, cursor];
    if (opts?.match) {
      command.push("match", opts.match);
    }
    if (typeof opts?.count === "number") {
      command.push("count", opts.count);
    }
    super(command, {
      deserialize: deserializeScanResponse,
      ...cmdOpts
    });
  }
};
var ZScoreCommand = class extends Command {
  static {
    __name(this, "ZScoreCommand");
  }
  constructor(cmd, opts) {
    super(["zscore", ...cmd], opts);
  }
};
var ZUnionCommand = class extends Command {
  static {
    __name(this, "ZUnionCommand");
  }
  constructor([numKeys, keyOrKeys, opts], cmdOpts) {
    const command = ["zunion", numKeys];
    if (Array.isArray(keyOrKeys)) {
      command.push(...keyOrKeys);
    } else {
      command.push(keyOrKeys);
    }
    if (opts) {
      if ("weights" in opts && opts.weights) {
        command.push("weights", ...opts.weights);
      } else if ("weight" in opts && typeof opts.weight === "number") {
        command.push("weights", opts.weight);
      }
      if ("aggregate" in opts) {
        command.push("aggregate", opts.aggregate);
      }
      if (opts.withScores) {
        command.push("withscores");
      }
    }
    super(command, cmdOpts);
  }
};
var ZUnionStoreCommand = class extends Command {
  static {
    __name(this, "ZUnionStoreCommand");
  }
  constructor([destination, numKeys, keyOrKeys, opts], cmdOpts) {
    const command = ["zunionstore", destination, numKeys];
    if (Array.isArray(keyOrKeys)) {
      command.push(...keyOrKeys);
    } else {
      command.push(keyOrKeys);
    }
    if (opts) {
      if ("weights" in opts && opts.weights) {
        command.push("weights", ...opts.weights);
      } else if ("weight" in opts && typeof opts.weight === "number") {
        command.push("weights", opts.weight);
      }
      if ("aggregate" in opts) {
        command.push("aggregate", opts.aggregate);
      }
    }
    super(command, cmdOpts);
  }
};
var ZDiffStoreCommand = class extends Command {
  static {
    __name(this, "ZDiffStoreCommand");
  }
  constructor(cmd, opts) {
    super(["zdiffstore", ...cmd], opts);
  }
};
var ZMScoreCommand = class extends Command {
  static {
    __name(this, "ZMScoreCommand");
  }
  constructor(cmd, opts) {
    const [key, members] = cmd;
    super(["zmscore", key, ...members], opts);
  }
};
var Pipeline = class {
  static {
    __name(this, "Pipeline");
  }
  client;
  commands;
  commandOptions;
  multiExec;
  constructor(opts) {
    this.client = opts.client;
    this.commands = [];
    this.commandOptions = opts.commandOptions;
    this.multiExec = opts.multiExec ?? false;
    if (this.commandOptions?.latencyLogging) {
      const originalExec = this.exec.bind(this);
      this.exec = async (options) => {
        const start = performance.now();
        const result = await (options ? originalExec(options) : originalExec());
        const end = performance.now();
        const loggerResult = (end - start).toFixed(2);
        console.log(
          `Latency for \x1B[38;2;19;185;39m${this.multiExec ? ["MULTI-EXEC"] : ["PIPELINE"].toString().toUpperCase()}\x1B[0m: \x1B[38;2;0;255;255m${loggerResult} ms\x1B[0m`
        );
        return result;
      };
    }
  }
  exec = /* @__PURE__ */ __name(async (options) => {
    if (this.commands.length === 0) {
      throw new Error("Pipeline is empty");
    }
    const path = this.multiExec ? ["multi-exec"] : ["pipeline"];
    const res = await this.client.request({
      path,
      body: Object.values(this.commands).map((c) => c.command)
    });
    return options?.keepErrors ? res.map(({ error: error3, result }, i) => {
      return {
        error: error3,
        result: this.commands[i].deserialize(result)
      };
    }) : res.map(({ error: error3, result }, i) => {
      if (error3) {
        throw new UpstashError(
          `Command ${i + 1} [ ${this.commands[i].command[0]} ] failed: ${error3}`
        );
      }
      return this.commands[i].deserialize(result);
    });
  }, "exec");
  /**
   * Returns the length of pipeline before the execution
   */
  length() {
    return this.commands.length;
  }
  /**
   * Pushes a command into the pipeline and returns a chainable instance of the
   * pipeline
   */
  chain(command) {
    this.commands.push(command);
    return this;
  }
  /**
   * @see https://redis.io/commands/append
   */
  append = /* @__PURE__ */ __name((...args) => this.chain(new AppendCommand(args, this.commandOptions)), "append");
  /**
   * @see https://redis.io/commands/bitcount
   */
  bitcount = /* @__PURE__ */ __name((...args) => this.chain(new BitCountCommand(args, this.commandOptions)), "bitcount");
  /**
   * Returns an instance that can be used to execute `BITFIELD` commands on one key.
   *
   * @example
   * ```typescript
   * redis.set("mykey", 0);
   * const result = await redis.pipeline()
   *   .bitfield("mykey")
   *   .set("u4", 0, 16)
   *   .incr("u4", "#1", 1)
   *   .exec();
   * console.log(result); // [[0, 1]]
   * ```
   *
   * @see https://redis.io/commands/bitfield
   */
  bitfield = /* @__PURE__ */ __name((...args) => new BitFieldCommand(args, this.client, this.commandOptions, this.chain.bind(this)), "bitfield");
  /**
   * @see https://redis.io/commands/bitop
   */
  bitop = /* @__PURE__ */ __name((op, destinationKey, sourceKey, ...sourceKeys) => this.chain(
    new BitOpCommand([op, destinationKey, sourceKey, ...sourceKeys], this.commandOptions)
  ), "bitop");
  /**
   * @see https://redis.io/commands/bitpos
   */
  bitpos = /* @__PURE__ */ __name((...args) => this.chain(new BitPosCommand(args, this.commandOptions)), "bitpos");
  /**
   * @see https://redis.io/commands/client-setinfo
   */
  clientSetinfo = /* @__PURE__ */ __name((...args) => this.chain(new ClientSetInfoCommand(args, this.commandOptions)), "clientSetinfo");
  /**
   * @see https://redis.io/commands/copy
   */
  copy = /* @__PURE__ */ __name((...args) => this.chain(new CopyCommand(args, this.commandOptions)), "copy");
  /**
   * @see https://redis.io/commands/zdiffstore
   */
  zdiffstore = /* @__PURE__ */ __name((...args) => this.chain(new ZDiffStoreCommand(args, this.commandOptions)), "zdiffstore");
  /**
   * @see https://redis.io/commands/dbsize
   */
  dbsize = /* @__PURE__ */ __name(() => this.chain(new DBSizeCommand(this.commandOptions)), "dbsize");
  /**
   * @see https://redis.io/commands/decr
   */
  decr = /* @__PURE__ */ __name((...args) => this.chain(new DecrCommand(args, this.commandOptions)), "decr");
  /**
   * @see https://redis.io/commands/decrby
   */
  decrby = /* @__PURE__ */ __name((...args) => this.chain(new DecrByCommand(args, this.commandOptions)), "decrby");
  /**
   * @see https://redis.io/commands/del
   */
  del = /* @__PURE__ */ __name((...args) => this.chain(new DelCommand(args, this.commandOptions)), "del");
  /**
   * @see https://redis.io/commands/echo
   */
  echo = /* @__PURE__ */ __name((...args) => this.chain(new EchoCommand(args, this.commandOptions)), "echo");
  /**
   * @see https://redis.io/commands/eval_ro
   */
  evalRo = /* @__PURE__ */ __name((...args) => this.chain(new EvalROCommand(args, this.commandOptions)), "evalRo");
  /**
   * @see https://redis.io/commands/eval
   */
  eval = /* @__PURE__ */ __name((...args) => this.chain(new EvalCommand(args, this.commandOptions)), "eval");
  /**
   * @see https://redis.io/commands/evalsha_ro
   */
  evalshaRo = /* @__PURE__ */ __name((...args) => this.chain(new EvalshaROCommand(args, this.commandOptions)), "evalshaRo");
  /**
   * @see https://redis.io/commands/evalsha
   */
  evalsha = /* @__PURE__ */ __name((...args) => this.chain(new EvalshaCommand(args, this.commandOptions)), "evalsha");
  /**
   * @see https://redis.io/commands/exists
   */
  exists = /* @__PURE__ */ __name((...args) => this.chain(new ExistsCommand(args, this.commandOptions)), "exists");
  /**
   * @see https://redis.io/commands/expire
   */
  expire = /* @__PURE__ */ __name((...args) => this.chain(new ExpireCommand(args, this.commandOptions)), "expire");
  /**
   * @see https://redis.io/commands/expireat
   */
  expireat = /* @__PURE__ */ __name((...args) => this.chain(new ExpireAtCommand(args, this.commandOptions)), "expireat");
  /**
   * @see https://redis.io/commands/flushall
   */
  flushall = /* @__PURE__ */ __name((args) => this.chain(new FlushAllCommand(args, this.commandOptions)), "flushall");
  /**
   * @see https://redis.io/commands/flushdb
   */
  flushdb = /* @__PURE__ */ __name((...args) => this.chain(new FlushDBCommand(args, this.commandOptions)), "flushdb");
  /**
   * @see https://redis.io/commands/geoadd
   */
  geoadd = /* @__PURE__ */ __name((...args) => this.chain(new GeoAddCommand(args, this.commandOptions)), "geoadd");
  /**
   * @see https://redis.io/commands/geodist
   */
  geodist = /* @__PURE__ */ __name((...args) => this.chain(new GeoDistCommand(args, this.commandOptions)), "geodist");
  /**
   * @see https://redis.io/commands/geopos
   */
  geopos = /* @__PURE__ */ __name((...args) => this.chain(new GeoPosCommand(args, this.commandOptions)), "geopos");
  /**
   * @see https://redis.io/commands/geohash
   */
  geohash = /* @__PURE__ */ __name((...args) => this.chain(new GeoHashCommand(args, this.commandOptions)), "geohash");
  /**
   * @see https://redis.io/commands/geosearch
   */
  geosearch = /* @__PURE__ */ __name((...args) => this.chain(new GeoSearchCommand(args, this.commandOptions)), "geosearch");
  /**
   * @see https://redis.io/commands/geosearchstore
   */
  geosearchstore = /* @__PURE__ */ __name((...args) => this.chain(new GeoSearchStoreCommand(args, this.commandOptions)), "geosearchstore");
  /**
   * @see https://redis.io/commands/get
   */
  get = /* @__PURE__ */ __name((...args) => this.chain(new GetCommand(args, this.commandOptions)), "get");
  /**
   * @see https://redis.io/commands/getbit
   */
  getbit = /* @__PURE__ */ __name((...args) => this.chain(new GetBitCommand(args, this.commandOptions)), "getbit");
  /**
   * @see https://redis.io/commands/getdel
   */
  getdel = /* @__PURE__ */ __name((...args) => this.chain(new GetDelCommand(args, this.commandOptions)), "getdel");
  /**
   * @see https://redis.io/commands/getex
   */
  getex = /* @__PURE__ */ __name((...args) => this.chain(new GetExCommand(args, this.commandOptions)), "getex");
  /**
   * @see https://redis.io/commands/getrange
   */
  getrange = /* @__PURE__ */ __name((...args) => this.chain(new GetRangeCommand(args, this.commandOptions)), "getrange");
  /**
   * @see https://redis.io/commands/getset
   */
  getset = /* @__PURE__ */ __name((key, value) => this.chain(new GetSetCommand([key, value], this.commandOptions)), "getset");
  /**
   * @see https://redis.io/commands/hdel
   */
  hdel = /* @__PURE__ */ __name((...args) => this.chain(new HDelCommand(args, this.commandOptions)), "hdel");
  /**
   * @see https://redis.io/commands/hexists
   */
  hexists = /* @__PURE__ */ __name((...args) => this.chain(new HExistsCommand(args, this.commandOptions)), "hexists");
  /**
   * @see https://redis.io/commands/hexpire
   */
  hexpire = /* @__PURE__ */ __name((...args) => this.chain(new HExpireCommand(args, this.commandOptions)), "hexpire");
  /**
   * @see https://redis.io/commands/hexpireat
   */
  hexpireat = /* @__PURE__ */ __name((...args) => this.chain(new HExpireAtCommand(args, this.commandOptions)), "hexpireat");
  /**
   * @see https://redis.io/commands/hexpiretime
   */
  hexpiretime = /* @__PURE__ */ __name((...args) => this.chain(new HExpireTimeCommand(args, this.commandOptions)), "hexpiretime");
  /**
   * @see https://redis.io/commands/httl
   */
  httl = /* @__PURE__ */ __name((...args) => this.chain(new HTtlCommand(args, this.commandOptions)), "httl");
  /**
   * @see https://redis.io/commands/hpexpire
   */
  hpexpire = /* @__PURE__ */ __name((...args) => this.chain(new HPExpireCommand(args, this.commandOptions)), "hpexpire");
  /**
   * @see https://redis.io/commands/hpexpireat
   */
  hpexpireat = /* @__PURE__ */ __name((...args) => this.chain(new HPExpireAtCommand(args, this.commandOptions)), "hpexpireat");
  /**
   * @see https://redis.io/commands/hpexpiretime
   */
  hpexpiretime = /* @__PURE__ */ __name((...args) => this.chain(new HPExpireTimeCommand(args, this.commandOptions)), "hpexpiretime");
  /**
   * @see https://redis.io/commands/hpttl
   */
  hpttl = /* @__PURE__ */ __name((...args) => this.chain(new HPTtlCommand(args, this.commandOptions)), "hpttl");
  /**
   * @see https://redis.io/commands/hpersist
   */
  hpersist = /* @__PURE__ */ __name((...args) => this.chain(new HPersistCommand(args, this.commandOptions)), "hpersist");
  /**
   * @see https://redis.io/commands/hget
   */
  hget = /* @__PURE__ */ __name((...args) => this.chain(new HGetCommand(args, this.commandOptions)), "hget");
  /**
   * @see https://redis.io/commands/hgetall
   */
  hgetall = /* @__PURE__ */ __name((...args) => this.chain(new HGetAllCommand(args, this.commandOptions)), "hgetall");
  /**
   * @see https://redis.io/commands/hgetdel
   */
  hgetdel = /* @__PURE__ */ __name((...args) => this.chain(new HGetDelCommand(args, this.commandOptions)), "hgetdel");
  /**
   * @see https://redis.io/commands/hgetex
   */
  hgetex = /* @__PURE__ */ __name((...args) => this.chain(new HGetExCommand(args, this.commandOptions)), "hgetex");
  /**
   * @see https://redis.io/commands/hincrby
   */
  hincrby = /* @__PURE__ */ __name((...args) => this.chain(new HIncrByCommand(args, this.commandOptions)), "hincrby");
  /**
   * @see https://redis.io/commands/hincrbyfloat
   */
  hincrbyfloat = /* @__PURE__ */ __name((...args) => this.chain(new HIncrByFloatCommand(args, this.commandOptions)), "hincrbyfloat");
  /**
   * @see https://redis.io/commands/hkeys
   */
  hkeys = /* @__PURE__ */ __name((...args) => this.chain(new HKeysCommand(args, this.commandOptions)), "hkeys");
  /**
   * @see https://redis.io/commands/hlen
   */
  hlen = /* @__PURE__ */ __name((...args) => this.chain(new HLenCommand(args, this.commandOptions)), "hlen");
  /**
   * @see https://redis.io/commands/hmget
   */
  hmget = /* @__PURE__ */ __name((...args) => this.chain(new HMGetCommand(args, this.commandOptions)), "hmget");
  /**
   * @see https://redis.io/commands/hmset
   */
  hmset = /* @__PURE__ */ __name((key, kv) => this.chain(new HMSetCommand([key, kv], this.commandOptions)), "hmset");
  /**
   * @see https://redis.io/commands/hrandfield
   */
  hrandfield = /* @__PURE__ */ __name((key, count3, withValues) => this.chain(new HRandFieldCommand([key, count3, withValues], this.commandOptions)), "hrandfield");
  /**
   * @see https://redis.io/commands/hscan
   */
  hscan = /* @__PURE__ */ __name((...args) => this.chain(new HScanCommand(args, this.commandOptions)), "hscan");
  /**
   * @see https://redis.io/commands/hset
   */
  hset = /* @__PURE__ */ __name((key, kv) => this.chain(new HSetCommand([key, kv], this.commandOptions)), "hset");
  /**
   * @see https://redis.io/commands/hsetex
   */
  hsetex = /* @__PURE__ */ __name((...args) => this.chain(new HSetExCommand(args, this.commandOptions)), "hsetex");
  /**
   * @see https://redis.io/commands/hsetnx
   */
  hsetnx = /* @__PURE__ */ __name((key, field, value) => this.chain(new HSetNXCommand([key, field, value], this.commandOptions)), "hsetnx");
  /**
   * @see https://redis.io/commands/hstrlen
   */
  hstrlen = /* @__PURE__ */ __name((...args) => this.chain(new HStrLenCommand(args, this.commandOptions)), "hstrlen");
  /**
   * @see https://redis.io/commands/hvals
   */
  hvals = /* @__PURE__ */ __name((...args) => this.chain(new HValsCommand(args, this.commandOptions)), "hvals");
  /**
   * @see https://redis.io/commands/incr
   */
  incr = /* @__PURE__ */ __name((...args) => this.chain(new IncrCommand(args, this.commandOptions)), "incr");
  /**
   * @see https://redis.io/commands/incrby
   */
  incrby = /* @__PURE__ */ __name((...args) => this.chain(new IncrByCommand(args, this.commandOptions)), "incrby");
  /**
   * @see https://redis.io/commands/incrbyfloat
   */
  incrbyfloat = /* @__PURE__ */ __name((...args) => this.chain(new IncrByFloatCommand(args, this.commandOptions)), "incrbyfloat");
  /**
   * @see https://redis.io/commands/keys
   */
  keys = /* @__PURE__ */ __name((...args) => this.chain(new KeysCommand(args, this.commandOptions)), "keys");
  /**
   * @see https://redis.io/commands/lindex
   */
  lindex = /* @__PURE__ */ __name((...args) => this.chain(new LIndexCommand(args, this.commandOptions)), "lindex");
  /**
   * @see https://redis.io/commands/linsert
   */
  linsert = /* @__PURE__ */ __name((key, direction, pivot, value) => this.chain(new LInsertCommand([key, direction, pivot, value], this.commandOptions)), "linsert");
  /**
   * @see https://redis.io/commands/llen
   */
  llen = /* @__PURE__ */ __name((...args) => this.chain(new LLenCommand(args, this.commandOptions)), "llen");
  /**
   * @see https://redis.io/commands/lmove
   */
  lmove = /* @__PURE__ */ __name((...args) => this.chain(new LMoveCommand(args, this.commandOptions)), "lmove");
  /**
   * @see https://redis.io/commands/lpop
   */
  lpop = /* @__PURE__ */ __name((...args) => this.chain(new LPopCommand(args, this.commandOptions)), "lpop");
  /**
   * @see https://redis.io/commands/lmpop
   */
  lmpop = /* @__PURE__ */ __name((...args) => this.chain(new LmPopCommand(args, this.commandOptions)), "lmpop");
  /**
   * @see https://redis.io/commands/lpos
   */
  lpos = /* @__PURE__ */ __name((...args) => this.chain(new LPosCommand(args, this.commandOptions)), "lpos");
  /**
   * @see https://redis.io/commands/lpush
   */
  lpush = /* @__PURE__ */ __name((key, ...elements) => this.chain(new LPushCommand([key, ...elements], this.commandOptions)), "lpush");
  /**
   * @see https://redis.io/commands/lpushx
   */
  lpushx = /* @__PURE__ */ __name((key, ...elements) => this.chain(new LPushXCommand([key, ...elements], this.commandOptions)), "lpushx");
  /**
   * @see https://redis.io/commands/lrange
   */
  lrange = /* @__PURE__ */ __name((...args) => this.chain(new LRangeCommand(args, this.commandOptions)), "lrange");
  /**
   * @see https://redis.io/commands/lrem
   */
  lrem = /* @__PURE__ */ __name((key, count3, value) => this.chain(new LRemCommand([key, count3, value], this.commandOptions)), "lrem");
  /**
   * @see https://redis.io/commands/lset
   */
  lset = /* @__PURE__ */ __name((key, index, value) => this.chain(new LSetCommand([key, index, value], this.commandOptions)), "lset");
  /**
   * @see https://redis.io/commands/ltrim
   */
  ltrim = /* @__PURE__ */ __name((...args) => this.chain(new LTrimCommand(args, this.commandOptions)), "ltrim");
  /**
   * @see https://redis.io/commands/mget
   */
  mget = /* @__PURE__ */ __name((...args) => this.chain(new MGetCommand(args, this.commandOptions)), "mget");
  /**
   * @see https://redis.io/commands/mset
   */
  mset = /* @__PURE__ */ __name((kv) => this.chain(new MSetCommand([kv], this.commandOptions)), "mset");
  /**
   * @see https://redis.io/commands/msetnx
   */
  msetnx = /* @__PURE__ */ __name((kv) => this.chain(new MSetNXCommand([kv], this.commandOptions)), "msetnx");
  /**
   * @see https://redis.io/commands/persist
   */
  persist = /* @__PURE__ */ __name((...args) => this.chain(new PersistCommand(args, this.commandOptions)), "persist");
  /**
   * @see https://redis.io/commands/pexpire
   */
  pexpire = /* @__PURE__ */ __name((...args) => this.chain(new PExpireCommand(args, this.commandOptions)), "pexpire");
  /**
   * @see https://redis.io/commands/pexpireat
   */
  pexpireat = /* @__PURE__ */ __name((...args) => this.chain(new PExpireAtCommand(args, this.commandOptions)), "pexpireat");
  /**
   * @see https://redis.io/commands/pfadd
   */
  pfadd = /* @__PURE__ */ __name((...args) => this.chain(new PfAddCommand(args, this.commandOptions)), "pfadd");
  /**
   * @see https://redis.io/commands/pfcount
   */
  pfcount = /* @__PURE__ */ __name((...args) => this.chain(new PfCountCommand(args, this.commandOptions)), "pfcount");
  /**
   * @see https://redis.io/commands/pfmerge
   */
  pfmerge = /* @__PURE__ */ __name((...args) => this.chain(new PfMergeCommand(args, this.commandOptions)), "pfmerge");
  /**
   * @see https://redis.io/commands/ping
   */
  ping = /* @__PURE__ */ __name((args) => this.chain(new PingCommand(args, this.commandOptions)), "ping");
  /**
   * @see https://redis.io/commands/psetex
   */
  psetex = /* @__PURE__ */ __name((key, ttl, value) => this.chain(new PSetEXCommand([key, ttl, value], this.commandOptions)), "psetex");
  /**
   * @see https://redis.io/commands/pttl
   */
  pttl = /* @__PURE__ */ __name((...args) => this.chain(new PTtlCommand(args, this.commandOptions)), "pttl");
  /**
   * @see https://redis.io/commands/publish
   */
  publish = /* @__PURE__ */ __name((...args) => this.chain(new PublishCommand(args, this.commandOptions)), "publish");
  /**
   * @see https://redis.io/commands/randomkey
   */
  randomkey = /* @__PURE__ */ __name(() => this.chain(new RandomKeyCommand(this.commandOptions)), "randomkey");
  /**
   * @see https://redis.io/commands/rename
   */
  rename = /* @__PURE__ */ __name((...args) => this.chain(new RenameCommand(args, this.commandOptions)), "rename");
  /**
   * @see https://redis.io/commands/renamenx
   */
  renamenx = /* @__PURE__ */ __name((...args) => this.chain(new RenameNXCommand(args, this.commandOptions)), "renamenx");
  /**
   * @see https://redis.io/commands/rpop
   */
  rpop = /* @__PURE__ */ __name((...args) => this.chain(new RPopCommand(args, this.commandOptions)), "rpop");
  /**
   * @see https://redis.io/commands/rpush
   */
  rpush = /* @__PURE__ */ __name((key, ...elements) => this.chain(new RPushCommand([key, ...elements], this.commandOptions)), "rpush");
  /**
   * @see https://redis.io/commands/rpushx
   */
  rpushx = /* @__PURE__ */ __name((key, ...elements) => this.chain(new RPushXCommand([key, ...elements], this.commandOptions)), "rpushx");
  /**
   * @see https://redis.io/commands/sadd
   */
  sadd = /* @__PURE__ */ __name((key, member, ...members) => this.chain(new SAddCommand([key, member, ...members], this.commandOptions)), "sadd");
  /**
   * @see https://redis.io/commands/scan
   */
  scan = /* @__PURE__ */ __name((...args) => this.chain(new ScanCommand(args, this.commandOptions)), "scan");
  /**
   * @see https://redis.io/commands/scard
   */
  scard = /* @__PURE__ */ __name((...args) => this.chain(new SCardCommand(args, this.commandOptions)), "scard");
  /**
   * @see https://redis.io/commands/script-exists
   */
  scriptExists = /* @__PURE__ */ __name((...args) => this.chain(new ScriptExistsCommand(args, this.commandOptions)), "scriptExists");
  /**
   * @see https://redis.io/commands/script-flush
   */
  scriptFlush = /* @__PURE__ */ __name((...args) => this.chain(new ScriptFlushCommand(args, this.commandOptions)), "scriptFlush");
  /**
   * @see https://redis.io/commands/script-load
   */
  scriptLoad = /* @__PURE__ */ __name((...args) => this.chain(new ScriptLoadCommand(args, this.commandOptions)), "scriptLoad");
  /*)*
   * @see https://redis.io/commands/sdiff
   */
  sdiff = /* @__PURE__ */ __name((...args) => this.chain(new SDiffCommand(args, this.commandOptions)), "sdiff");
  /**
   * @see https://redis.io/commands/sdiffstore
   */
  sdiffstore = /* @__PURE__ */ __name((...args) => this.chain(new SDiffStoreCommand(args, this.commandOptions)), "sdiffstore");
  /**
   * @see https://redis.io/commands/set
   */
  set = /* @__PURE__ */ __name((key, value, opts) => this.chain(new SetCommand([key, value, opts], this.commandOptions)), "set");
  /**
   * @see https://redis.io/commands/setbit
   */
  setbit = /* @__PURE__ */ __name((...args) => this.chain(new SetBitCommand(args, this.commandOptions)), "setbit");
  /**
   * @see https://redis.io/commands/setex
   */
  setex = /* @__PURE__ */ __name((key, ttl, value) => this.chain(new SetExCommand([key, ttl, value], this.commandOptions)), "setex");
  /**
   * @see https://redis.io/commands/setnx
   */
  setnx = /* @__PURE__ */ __name((key, value) => this.chain(new SetNxCommand([key, value], this.commandOptions)), "setnx");
  /**
   * @see https://redis.io/commands/setrange
   */
  setrange = /* @__PURE__ */ __name((...args) => this.chain(new SetRangeCommand(args, this.commandOptions)), "setrange");
  /**
   * @see https://redis.io/commands/sinter
   */
  sinter = /* @__PURE__ */ __name((...args) => this.chain(new SInterCommand(args, this.commandOptions)), "sinter");
  /**
   * @see https://redis.io/commands/sintercard
   */
  sintercard = /* @__PURE__ */ __name((...args) => this.chain(new SInterCardCommand(args, this.commandOptions)), "sintercard");
  /**
   * @see https://redis.io/commands/sinterstore
   */
  sinterstore = /* @__PURE__ */ __name((...args) => this.chain(new SInterStoreCommand(args, this.commandOptions)), "sinterstore");
  /**
   * @see https://redis.io/commands/sismember
   */
  sismember = /* @__PURE__ */ __name((key, member) => this.chain(new SIsMemberCommand([key, member], this.commandOptions)), "sismember");
  /**
   * @see https://redis.io/commands/smembers
   */
  smembers = /* @__PURE__ */ __name((...args) => this.chain(new SMembersCommand(args, this.commandOptions)), "smembers");
  /**
   * @see https://redis.io/commands/smismember
   */
  smismember = /* @__PURE__ */ __name((key, members) => this.chain(new SMIsMemberCommand([key, members], this.commandOptions)), "smismember");
  /**
   * @see https://redis.io/commands/smove
   */
  smove = /* @__PURE__ */ __name((source, destination, member) => this.chain(new SMoveCommand([source, destination, member], this.commandOptions)), "smove");
  /**
   * @see https://redis.io/commands/spop
   */
  spop = /* @__PURE__ */ __name((...args) => this.chain(new SPopCommand(args, this.commandOptions)), "spop");
  /**
   * @see https://redis.io/commands/srandmember
   */
  srandmember = /* @__PURE__ */ __name((...args) => this.chain(new SRandMemberCommand(args, this.commandOptions)), "srandmember");
  /**
   * @see https://redis.io/commands/srem
   */
  srem = /* @__PURE__ */ __name((key, ...members) => this.chain(new SRemCommand([key, ...members], this.commandOptions)), "srem");
  /**
   * @see https://redis.io/commands/sscan
   */
  sscan = /* @__PURE__ */ __name((...args) => this.chain(new SScanCommand(args, this.commandOptions)), "sscan");
  /**
   * @see https://redis.io/commands/strlen
   */
  strlen = /* @__PURE__ */ __name((...args) => this.chain(new StrLenCommand(args, this.commandOptions)), "strlen");
  /**
   * @see https://redis.io/commands/sunion
   */
  sunion = /* @__PURE__ */ __name((...args) => this.chain(new SUnionCommand(args, this.commandOptions)), "sunion");
  /**
   * @see https://redis.io/commands/sunionstore
   */
  sunionstore = /* @__PURE__ */ __name((...args) => this.chain(new SUnionStoreCommand(args, this.commandOptions)), "sunionstore");
  /**
   * @see https://redis.io/commands/time
   */
  time = /* @__PURE__ */ __name(() => this.chain(new TimeCommand(this.commandOptions)), "time");
  /**
   * @see https://redis.io/commands/touch
   */
  touch = /* @__PURE__ */ __name((...args) => this.chain(new TouchCommand(args, this.commandOptions)), "touch");
  /**
   * @see https://redis.io/commands/ttl
   */
  ttl = /* @__PURE__ */ __name((...args) => this.chain(new TtlCommand(args, this.commandOptions)), "ttl");
  /**
   * @see https://redis.io/commands/type
   */
  type = /* @__PURE__ */ __name((...args) => this.chain(new TypeCommand(args, this.commandOptions)), "type");
  /**
   * @see https://redis.io/commands/unlink
   */
  unlink = /* @__PURE__ */ __name((...args) => this.chain(new UnlinkCommand(args, this.commandOptions)), "unlink");
  /**
   * @see https://redis.io/commands/zadd
   */
  zadd = /* @__PURE__ */ __name((...args) => {
    if ("score" in args[1]) {
      return this.chain(
        new ZAddCommand([args[0], args[1], ...args.slice(2)], this.commandOptions)
      );
    }
    return this.chain(
      new ZAddCommand(
        [args[0], args[1], ...args.slice(2)],
        this.commandOptions
      )
    );
  }, "zadd");
  /**
   * @see https://redis.io/commands/xadd
   */
  xadd = /* @__PURE__ */ __name((...args) => this.chain(new XAddCommand(args, this.commandOptions)), "xadd");
  /**
   * @see https://redis.io/commands/xack
   */
  xack = /* @__PURE__ */ __name((...args) => this.chain(new XAckCommand(args, this.commandOptions)), "xack");
  /**
   * @see https://redis.io/commands/xackdel
   */
  xackdel = /* @__PURE__ */ __name((...args) => this.chain(new XAckDelCommand(args, this.commandOptions)), "xackdel");
  /**
   * @see https://redis.io/commands/xdel
   */
  xdel = /* @__PURE__ */ __name((...args) => this.chain(new XDelCommand(args, this.commandOptions)), "xdel");
  /**
   * @see https://redis.io/commands/xdelex
   */
  xdelex = /* @__PURE__ */ __name((...args) => this.chain(new XDelExCommand(args, this.commandOptions)), "xdelex");
  /**
   * @see https://redis.io/commands/xgroup
   */
  xgroup = /* @__PURE__ */ __name((...args) => this.chain(new XGroupCommand(args, this.commandOptions)), "xgroup");
  /**
   * @see https://redis.io/commands/xread
   */
  xread = /* @__PURE__ */ __name((...args) => this.chain(new XReadCommand(args, this.commandOptions)), "xread");
  /**
   * @see https://redis.io/commands/xreadgroup
   */
  xreadgroup = /* @__PURE__ */ __name((...args) => this.chain(new XReadGroupCommand(args, this.commandOptions)), "xreadgroup");
  /**
   * @see https://redis.io/commands/xinfo
   */
  xinfo = /* @__PURE__ */ __name((...args) => this.chain(new XInfoCommand(args, this.commandOptions)), "xinfo");
  /**
   * @see https://redis.io/commands/xlen
   */
  xlen = /* @__PURE__ */ __name((...args) => this.chain(new XLenCommand(args, this.commandOptions)), "xlen");
  /**
   * @see https://redis.io/commands/xpending
   */
  xpending = /* @__PURE__ */ __name((...args) => this.chain(new XPendingCommand(args, this.commandOptions)), "xpending");
  /**
   * @see https://redis.io/commands/xclaim
   */
  xclaim = /* @__PURE__ */ __name((...args) => this.chain(new XClaimCommand(args, this.commandOptions)), "xclaim");
  /**
   * @see https://redis.io/commands/xautoclaim
   */
  xautoclaim = /* @__PURE__ */ __name((...args) => this.chain(new XAutoClaim(args, this.commandOptions)), "xautoclaim");
  /**
   * @see https://redis.io/commands/xtrim
   */
  xtrim = /* @__PURE__ */ __name((...args) => this.chain(new XTrimCommand(args, this.commandOptions)), "xtrim");
  /**
   * @see https://redis.io/commands/xrange
   */
  xrange = /* @__PURE__ */ __name((...args) => this.chain(new XRangeCommand(args, this.commandOptions)), "xrange");
  /**
   * @see https://redis.io/commands/xrevrange
   */
  xrevrange = /* @__PURE__ */ __name((...args) => this.chain(new XRevRangeCommand(args, this.commandOptions)), "xrevrange");
  /**
   * @see https://redis.io/commands/zcard
   */
  zcard = /* @__PURE__ */ __name((...args) => this.chain(new ZCardCommand(args, this.commandOptions)), "zcard");
  /**
   * @see https://redis.io/commands/zcount
   */
  zcount = /* @__PURE__ */ __name((...args) => this.chain(new ZCountCommand(args, this.commandOptions)), "zcount");
  /**
   * @see https://redis.io/commands/zincrby
   */
  zincrby = /* @__PURE__ */ __name((key, increment, member) => this.chain(new ZIncrByCommand([key, increment, member], this.commandOptions)), "zincrby");
  /**
   * @see https://redis.io/commands/zinterstore
   */
  zinterstore = /* @__PURE__ */ __name((...args) => this.chain(new ZInterStoreCommand(args, this.commandOptions)), "zinterstore");
  /**
   * @see https://redis.io/commands/zlexcount
   */
  zlexcount = /* @__PURE__ */ __name((...args) => this.chain(new ZLexCountCommand(args, this.commandOptions)), "zlexcount");
  /**
   * @see https://redis.io/commands/zmscore
   */
  zmscore = /* @__PURE__ */ __name((...args) => this.chain(new ZMScoreCommand(args, this.commandOptions)), "zmscore");
  /**
   * @see https://redis.io/commands/zpopmax
   */
  zpopmax = /* @__PURE__ */ __name((...args) => this.chain(new ZPopMaxCommand(args, this.commandOptions)), "zpopmax");
  /**
   * @see https://redis.io/commands/zpopmin
   */
  zpopmin = /* @__PURE__ */ __name((...args) => this.chain(new ZPopMinCommand(args, this.commandOptions)), "zpopmin");
  /**
   * @see https://redis.io/commands/zrange
   */
  zrange = /* @__PURE__ */ __name((...args) => this.chain(new ZRangeCommand(args, this.commandOptions)), "zrange");
  /**
   * @see https://redis.io/commands/zrank
   */
  zrank = /* @__PURE__ */ __name((key, member) => this.chain(new ZRankCommand([key, member], this.commandOptions)), "zrank");
  /**
   * @see https://redis.io/commands/zrem
   */
  zrem = /* @__PURE__ */ __name((key, ...members) => this.chain(new ZRemCommand([key, ...members], this.commandOptions)), "zrem");
  /**
   * @see https://redis.io/commands/zremrangebylex
   */
  zremrangebylex = /* @__PURE__ */ __name((...args) => this.chain(new ZRemRangeByLexCommand(args, this.commandOptions)), "zremrangebylex");
  /**
   * @see https://redis.io/commands/zremrangebyrank
   */
  zremrangebyrank = /* @__PURE__ */ __name((...args) => this.chain(new ZRemRangeByRankCommand(args, this.commandOptions)), "zremrangebyrank");
  /**
   * @see https://redis.io/commands/zremrangebyscore
   */
  zremrangebyscore = /* @__PURE__ */ __name((...args) => this.chain(new ZRemRangeByScoreCommand(args, this.commandOptions)), "zremrangebyscore");
  /**
   * @see https://redis.io/commands/zrevrank
   */
  zrevrank = /* @__PURE__ */ __name((key, member) => this.chain(new ZRevRankCommand([key, member], this.commandOptions)), "zrevrank");
  /**
   * @see https://redis.io/commands/zscan
   */
  zscan = /* @__PURE__ */ __name((...args) => this.chain(new ZScanCommand(args, this.commandOptions)), "zscan");
  /**
   * @see https://redis.io/commands/zscore
   */
  zscore = /* @__PURE__ */ __name((key, member) => this.chain(new ZScoreCommand([key, member], this.commandOptions)), "zscore");
  /**
   * @see https://redis.io/commands/zunionstore
   */
  zunionstore = /* @__PURE__ */ __name((...args) => this.chain(new ZUnionStoreCommand(args, this.commandOptions)), "zunionstore");
  /**
   * @see https://redis.io/commands/zunion
   */
  zunion = /* @__PURE__ */ __name((...args) => this.chain(new ZUnionCommand(args, this.commandOptions)), "zunion");
  /**
   * @see https://redis.io/commands/?group=json
   */
  get json() {
    return {
      /**
       * @see https://redis.io/commands/json.arrappend
       */
      arrappend: /* @__PURE__ */ __name((...args) => this.chain(new JsonArrAppendCommand(args, this.commandOptions)), "arrappend"),
      /**
       * @see https://redis.io/commands/json.arrindex
       */
      arrindex: /* @__PURE__ */ __name((...args) => this.chain(new JsonArrIndexCommand(args, this.commandOptions)), "arrindex"),
      /**
       * @see https://redis.io/commands/json.arrinsert
       */
      arrinsert: /* @__PURE__ */ __name((...args) => this.chain(new JsonArrInsertCommand(args, this.commandOptions)), "arrinsert"),
      /**
       * @see https://redis.io/commands/json.arrlen
       */
      arrlen: /* @__PURE__ */ __name((...args) => this.chain(new JsonArrLenCommand(args, this.commandOptions)), "arrlen"),
      /**
       * @see https://redis.io/commands/json.arrpop
       */
      arrpop: /* @__PURE__ */ __name((...args) => this.chain(new JsonArrPopCommand(args, this.commandOptions)), "arrpop"),
      /**
       * @see https://redis.io/commands/json.arrtrim
       */
      arrtrim: /* @__PURE__ */ __name((...args) => this.chain(new JsonArrTrimCommand(args, this.commandOptions)), "arrtrim"),
      /**
       * @see https://redis.io/commands/json.clear
       */
      clear: /* @__PURE__ */ __name((...args) => this.chain(new JsonClearCommand(args, this.commandOptions)), "clear"),
      /**
       * @see https://redis.io/commands/json.del
       */
      del: /* @__PURE__ */ __name((...args) => this.chain(new JsonDelCommand(args, this.commandOptions)), "del"),
      /**
       * @see https://redis.io/commands/json.forget
       */
      forget: /* @__PURE__ */ __name((...args) => this.chain(new JsonForgetCommand(args, this.commandOptions)), "forget"),
      /**
       * @see https://redis.io/commands/json.get
       */
      get: /* @__PURE__ */ __name((...args) => this.chain(new JsonGetCommand(args, this.commandOptions)), "get"),
      /**
       * @see https://redis.io/commands/json.merge
       */
      merge: /* @__PURE__ */ __name((...args) => this.chain(new JsonMergeCommand(args, this.commandOptions)), "merge"),
      /**
       * @see https://redis.io/commands/json.mget
       */
      mget: /* @__PURE__ */ __name((...args) => this.chain(new JsonMGetCommand(args, this.commandOptions)), "mget"),
      /**
       * @see https://redis.io/commands/json.mset
       */
      mset: /* @__PURE__ */ __name((...args) => this.chain(new JsonMSetCommand(args, this.commandOptions)), "mset"),
      /**
       * @see https://redis.io/commands/json.numincrby
       */
      numincrby: /* @__PURE__ */ __name((...args) => this.chain(new JsonNumIncrByCommand(args, this.commandOptions)), "numincrby"),
      /**
       * @see https://redis.io/commands/json.nummultby
       */
      nummultby: /* @__PURE__ */ __name((...args) => this.chain(new JsonNumMultByCommand(args, this.commandOptions)), "nummultby"),
      /**
       * @see https://redis.io/commands/json.objkeys
       */
      objkeys: /* @__PURE__ */ __name((...args) => this.chain(new JsonObjKeysCommand(args, this.commandOptions)), "objkeys"),
      /**
       * @see https://redis.io/commands/json.objlen
       */
      objlen: /* @__PURE__ */ __name((...args) => this.chain(new JsonObjLenCommand(args, this.commandOptions)), "objlen"),
      /**
       * @see https://redis.io/commands/json.resp
       */
      resp: /* @__PURE__ */ __name((...args) => this.chain(new JsonRespCommand(args, this.commandOptions)), "resp"),
      /**
       * @see https://redis.io/commands/json.set
       */
      set: /* @__PURE__ */ __name((...args) => this.chain(new JsonSetCommand(args, this.commandOptions)), "set"),
      /**
       * @see https://redis.io/commands/json.strappend
       */
      strappend: /* @__PURE__ */ __name((...args) => this.chain(new JsonStrAppendCommand(args, this.commandOptions)), "strappend"),
      /**
       * @see https://redis.io/commands/json.strlen
       */
      strlen: /* @__PURE__ */ __name((...args) => this.chain(new JsonStrLenCommand(args, this.commandOptions)), "strlen"),
      /**
       * @see https://redis.io/commands/json.toggle
       */
      toggle: /* @__PURE__ */ __name((...args) => this.chain(new JsonToggleCommand(args, this.commandOptions)), "toggle"),
      /**
       * @see https://redis.io/commands/json.type
       */
      type: /* @__PURE__ */ __name((...args) => this.chain(new JsonTypeCommand(args, this.commandOptions)), "type")
    };
  }
  get functions() {
    return {
      /**
       * @see https://redis.io/docs/latest/commands/function-load/
       */
      load: /* @__PURE__ */ __name((...args) => this.chain(new FunctionLoadCommand(args, this.commandOptions)), "load"),
      /**
       * @see https://redis.io/docs/latest/commands/function-list/
       */
      list: /* @__PURE__ */ __name((...args) => this.chain(new FunctionListCommand(args, this.commandOptions)), "list"),
      /**
       * @see https://redis.io/docs/latest/commands/function-delete/
       */
      delete: /* @__PURE__ */ __name((...args) => this.chain(new FunctionDeleteCommand(args, this.commandOptions)), "delete"),
      /**
       * @see https://redis.io/docs/latest/commands/function-flush/
       */
      flush: /* @__PURE__ */ __name(() => this.chain(new FunctionFlushCommand(this.commandOptions)), "flush"),
      /**
       * @see https://redis.io/docs/latest/commands/function-stats/
       */
      stats: /* @__PURE__ */ __name(() => this.chain(new FunctionStatsCommand(this.commandOptions)), "stats"),
      /**
       * @see https://redis.io/docs/latest/commands/fcall/
       */
      call: /* @__PURE__ */ __name((...args) => this.chain(new FCallCommand(args, this.commandOptions)), "call"),
      /**
       * @see https://redis.io/docs/latest/commands/fcall_ro/
       */
      callRo: /* @__PURE__ */ __name((...args) => this.chain(new FCallRoCommand(args, this.commandOptions)), "callRo")
    };
  }
};
var EXCLUDE_COMMANDS = /* @__PURE__ */ new Set([
  "scan",
  "keys",
  "flushdb",
  "flushall",
  "dbsize",
  "hscan",
  "hgetall",
  "hkeys",
  "lrange",
  "sscan",
  "smembers",
  "xrange",
  "xrevrange",
  "zscan",
  "zrange",
  "exec"
]);
function createAutoPipelineProxy(_redis, namespace = "root") {
  const redis2 = _redis;
  if (!redis2.autoPipelineExecutor) {
    redis2.autoPipelineExecutor = new AutoPipelineExecutor(redis2);
  }
  return new Proxy(redis2, {
    get: /* @__PURE__ */ __name((redis22, command) => {
      if (command === "pipelineCounter") {
        return redis22.autoPipelineExecutor.pipelineCounter;
      }
      if (namespace === "root" && command === "json") {
        return createAutoPipelineProxy(redis22, "json");
      }
      if (namespace === "root" && command === "functions") {
        return createAutoPipelineProxy(redis22, "functions");
      }
      if (namespace === "root") {
        const commandInRedisButNotPipeline = command in redis22 && !(command in redis22.autoPipelineExecutor.pipeline);
        const isCommandExcluded = EXCLUDE_COMMANDS.has(command);
        if (commandInRedisButNotPipeline || isCommandExcluded) {
          return redis22[command];
        }
      }
      const pipeline = redis22.autoPipelineExecutor.pipeline;
      const targetFunction = namespace === "json" ? pipeline.json[command] : namespace === "functions" ? pipeline.functions[command] : pipeline[command];
      const isFunction = typeof targetFunction === "function";
      if (isFunction) {
        return (...args) => {
          return redis22.autoPipelineExecutor.withAutoPipeline((pipeline2) => {
            const targetFunction2 = namespace === "json" ? pipeline2.json[command] : namespace === "functions" ? pipeline2.functions[command] : pipeline2[command];
            targetFunction2(...args);
          });
        };
      }
      return targetFunction;
    }, "get")
  });
}
__name(createAutoPipelineProxy, "createAutoPipelineProxy");
var AutoPipelineExecutor = class {
  static {
    __name(this, "AutoPipelineExecutor");
  }
  pipelinePromises = /* @__PURE__ */ new WeakMap();
  activePipeline = null;
  indexInCurrentPipeline = 0;
  redis;
  pipeline;
  // only to make sure that proxy can work
  pipelineCounter = 0;
  // to keep track of how many times a pipeline was executed
  constructor(redis2) {
    this.redis = redis2;
    this.pipeline = redis2.pipeline();
  }
  async withAutoPipeline(executeWithPipeline) {
    const pipeline = this.activePipeline ?? this.redis.pipeline();
    if (!this.activePipeline) {
      this.activePipeline = pipeline;
      this.indexInCurrentPipeline = 0;
    }
    const index = this.indexInCurrentPipeline++;
    executeWithPipeline(pipeline);
    const pipelineDone = this.deferExecution().then(() => {
      if (!this.pipelinePromises.has(pipeline)) {
        const pipelinePromise = pipeline.exec({ keepErrors: true });
        this.pipelineCounter += 1;
        this.pipelinePromises.set(pipeline, pipelinePromise);
        this.activePipeline = null;
      }
      return this.pipelinePromises.get(pipeline);
    });
    const results = await pipelineDone;
    const commandResult = results[index];
    if (commandResult.error) {
      throw new UpstashError(`Command failed: ${commandResult.error}`);
    }
    return commandResult.result;
  }
  async deferExecution() {
    await Promise.resolve();
    await Promise.resolve();
  }
};
var PSubscribeCommand = class extends Command {
  static {
    __name(this, "PSubscribeCommand");
  }
  constructor(cmd, opts) {
    const sseHeaders = {
      Accept: "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive"
    };
    super([], {
      ...opts,
      headers: sseHeaders,
      path: ["psubscribe", ...cmd],
      streamOptions: {
        isStreaming: true,
        onMessage: opts?.streamOptions?.onMessage,
        signal: opts?.streamOptions?.signal
      }
    });
  }
};
var Subscriber = class extends EventTarget {
  static {
    __name(this, "Subscriber");
  }
  subscriptions;
  client;
  listeners;
  opts;
  constructor(client, channels, isPattern = false, opts) {
    super();
    this.client = client;
    this.subscriptions = /* @__PURE__ */ new Map();
    this.listeners = /* @__PURE__ */ new Map();
    this.opts = opts;
    for (const channel2 of channels) {
      if (isPattern) {
        this.subscribeToPattern(channel2);
      } else {
        this.subscribeToChannel(channel2);
      }
    }
  }
  subscribeToChannel(channel2) {
    const controller = new AbortController();
    const command = new SubscribeCommand([channel2], {
      streamOptions: {
        signal: controller.signal,
        onMessage: /* @__PURE__ */ __name((data) => this.handleMessage(data, false), "onMessage")
      }
    });
    command.exec(this.client).catch((error3) => {
      if (error3.name !== "AbortError") {
        this.dispatchToListeners("error", error3);
      }
    });
    this.subscriptions.set(channel2, {
      command,
      controller,
      isPattern: false
    });
  }
  subscribeToPattern(pattern) {
    const controller = new AbortController();
    const command = new PSubscribeCommand([pattern], {
      streamOptions: {
        signal: controller.signal,
        onMessage: /* @__PURE__ */ __name((data) => this.handleMessage(data, true), "onMessage")
      }
    });
    command.exec(this.client).catch((error3) => {
      if (error3.name !== "AbortError") {
        this.dispatchToListeners("error", error3);
      }
    });
    this.subscriptions.set(pattern, {
      command,
      controller,
      isPattern: true
    });
  }
  handleMessage(data, isPattern) {
    const messageData = data.replace(/^data:\s*/, "");
    const firstCommaIndex = messageData.indexOf(",");
    const secondCommaIndex = messageData.indexOf(",", firstCommaIndex + 1);
    const thirdCommaIndex = isPattern ? messageData.indexOf(",", secondCommaIndex + 1) : -1;
    if (firstCommaIndex !== -1 && secondCommaIndex !== -1) {
      const type = messageData.slice(0, firstCommaIndex);
      if (isPattern && type === "pmessage" && thirdCommaIndex !== -1) {
        const pattern = messageData.slice(firstCommaIndex + 1, secondCommaIndex);
        const channel2 = messageData.slice(secondCommaIndex + 1, thirdCommaIndex);
        const messageStr = messageData.slice(thirdCommaIndex + 1);
        try {
          const message = this.opts?.automaticDeserialization === false ? messageStr : JSON.parse(messageStr);
          this.dispatchToListeners("pmessage", { pattern, channel: channel2, message });
          this.dispatchToListeners(`pmessage:${pattern}`, { pattern, channel: channel2, message });
        } catch (error3) {
          this.dispatchToListeners("error", new Error(`Failed to parse message: ${error3}`));
        }
      } else {
        const channel2 = messageData.slice(firstCommaIndex + 1, secondCommaIndex);
        const messageStr = messageData.slice(secondCommaIndex + 1);
        try {
          if (type === "subscribe" || type === "psubscribe" || type === "unsubscribe" || type === "punsubscribe") {
            const count3 = Number.parseInt(messageStr);
            this.dispatchToListeners(type, count3);
          } else {
            const message = this.opts?.automaticDeserialization === false ? messageStr : parseWithTryCatch(messageStr);
            this.dispatchToListeners(type, { channel: channel2, message });
            this.dispatchToListeners(`${type}:${channel2}`, { channel: channel2, message });
          }
        } catch (error3) {
          this.dispatchToListeners("error", new Error(`Failed to parse message: ${error3}`));
        }
      }
    }
  }
  dispatchToListeners(type, data) {
    const listeners2 = this.listeners.get(type);
    if (listeners2) {
      for (const listener of listeners2) {
        listener(data);
      }
    }
  }
  on(type, listener) {
    if (!this.listeners.has(type)) {
      this.listeners.set(type, /* @__PURE__ */ new Set());
    }
    this.listeners.get(type)?.add(listener);
  }
  removeAllListeners() {
    this.listeners.clear();
  }
  async unsubscribe(channels) {
    if (channels) {
      for (const channel2 of channels) {
        const subscription = this.subscriptions.get(channel2);
        if (subscription) {
          try {
            subscription.controller.abort();
          } catch {
          }
          this.subscriptions.delete(channel2);
        }
      }
    } else {
      for (const subscription of this.subscriptions.values()) {
        try {
          subscription.controller.abort();
        } catch {
        }
      }
      this.subscriptions.clear();
      this.removeAllListeners();
    }
  }
  getSubscribedChannels() {
    return [...this.subscriptions.keys()];
  }
};
var SubscribeCommand = class extends Command {
  static {
    __name(this, "SubscribeCommand");
  }
  constructor(cmd, opts) {
    const sseHeaders = {
      Accept: "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive"
    };
    super([], {
      ...opts,
      headers: sseHeaders,
      path: ["subscribe", ...cmd],
      streamOptions: {
        isStreaming: true,
        onMessage: opts?.streamOptions?.onMessage,
        signal: opts?.streamOptions?.signal
      }
    });
  }
};
var parseWithTryCatch = /* @__PURE__ */ __name((str) => {
  try {
    return JSON.parse(str);
  } catch {
    return str;
  }
}, "parseWithTryCatch");
var Script = class {
  static {
    __name(this, "Script");
  }
  script;
  /**
   * @deprecated This property is initialized to an empty string and will be set in the init method
   * asynchronously. Do not use this property immidiately after the constructor.
   *
   * This property is only exposed for backwards compatibility and will be removed in the
   * future major release.
   */
  sha1;
  initPromise;
  redis;
  constructor(redis2, script) {
    this.redis = redis2;
    this.script = script;
    this.sha1 = "";
    void this.init(script);
  }
  /**
   * Initialize the script by computing its SHA-1 hash.
   */
  init(script) {
    if (!this.initPromise) {
      this.initPromise = this.digest(script).then((sha1) => {
        this.sha1 = sha1;
      });
    }
    return this.initPromise;
  }
  /**
   * Send an `EVAL` command to redis.
   */
  async eval(keys, args) {
    await this.init(this.script);
    return await this.redis.eval(this.script, keys, args);
  }
  /**
   * Calculates the sha1 hash of the script and then calls `EVALSHA`.
   */
  async evalsha(keys, args) {
    await this.init(this.script);
    return await this.redis.evalsha(this.sha1, keys, args);
  }
  /**
   * Optimistically try to run `EVALSHA` first.
   * If the script is not loaded in redis, it will fall back and try again with `EVAL`.
   *
   * Following calls will be able to use the cached script
   */
  async exec(keys, args) {
    await this.init(this.script);
    const res = await this.redis.evalsha(this.sha1, keys, args).catch(async (error3) => {
      if (error3 instanceof Error && error3.message.toLowerCase().includes("noscript")) {
        return await this.redis.eval(this.script, keys, args);
      }
      throw error3;
    });
    return res;
  }
  /**
   * Compute the sha1 hash of the script and return its hex representation.
   */
  async digest(s) {
    const data = new TextEncoder().encode(s);
    const hashBuffer = await subtle.digest("SHA-1", data);
    const hashArray = [...new Uint8Array(hashBuffer)];
    return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  }
};
var ScriptRO = class {
  static {
    __name(this, "ScriptRO");
  }
  script;
  /**
   * @deprecated This property is initialized to an empty string and will be set in the init method
   * asynchronously. Do not use this property immidiately after the constructor.
   *
   * This property is only exposed for backwards compatibility and will be removed in the
   * future major release.
   */
  sha1;
  initPromise;
  redis;
  constructor(redis2, script) {
    this.redis = redis2;
    this.sha1 = "";
    this.script = script;
    void this.init(script);
  }
  init(script) {
    if (!this.initPromise) {
      this.initPromise = this.digest(script).then((sha1) => {
        this.sha1 = sha1;
      });
    }
    return this.initPromise;
  }
  /**
   * Send an `EVAL_RO` command to redis.
   */
  async evalRo(keys, args) {
    await this.init(this.script);
    return await this.redis.evalRo(this.script, keys, args);
  }
  /**
   * Calculates the sha1 hash of the script and then calls `EVALSHA_RO`.
   */
  async evalshaRo(keys, args) {
    await this.init(this.script);
    return await this.redis.evalshaRo(this.sha1, keys, args);
  }
  /**
   * Optimistically try to run `EVALSHA_RO` first.
   * If the script is not loaded in redis, it will fall back and try again with `EVAL_RO`.
   *
   * Following calls will be able to use the cached script
   */
  async exec(keys, args) {
    await this.init(this.script);
    const res = await this.redis.evalshaRo(this.sha1, keys, args).catch(async (error3) => {
      if (error3 instanceof Error && error3.message.toLowerCase().includes("noscript")) {
        return await this.redis.evalRo(this.script, keys, args);
      }
      throw error3;
    });
    return res;
  }
  /**
   * Compute the sha1 hash of the script and return its hex representation.
   */
  async digest(s) {
    const data = new TextEncoder().encode(s);
    const hashBuffer = await subtle.digest("SHA-1", data);
    const hashArray = [...new Uint8Array(hashBuffer)];
    return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  }
};
var Redis = class {
  static {
    __name(this, "Redis");
  }
  client;
  opts;
  enableTelemetry;
  enableAutoPipelining;
  /**
   * Create a new redis client
   *
   * @example
   * ```typescript
   * const redis = new Redis({
   *  url: "<UPSTASH_REDIS_REST_URL>",
   *  token: "<UPSTASH_REDIS_REST_TOKEN>",
   * });
   * ```
   */
  constructor(client, opts) {
    this.client = client;
    this.opts = opts;
    this.enableTelemetry = opts?.enableTelemetry ?? true;
    if (opts?.readYourWrites === false) {
      this.client.readYourWrites = false;
    }
    this.enableAutoPipelining = opts?.enableAutoPipelining ?? true;
  }
  get readYourWritesSyncToken() {
    return this.client.upstashSyncToken;
  }
  set readYourWritesSyncToken(session) {
    this.client.upstashSyncToken = session;
  }
  get json() {
    return {
      /**
       * @see https://redis.io/commands/json.arrappend
       */
      arrappend: /* @__PURE__ */ __name((...args) => new JsonArrAppendCommand(args, this.opts).exec(this.client), "arrappend"),
      /**
       * @see https://redis.io/commands/json.arrindex
       */
      arrindex: /* @__PURE__ */ __name((...args) => new JsonArrIndexCommand(args, this.opts).exec(this.client), "arrindex"),
      /**
       * @see https://redis.io/commands/json.arrinsert
       */
      arrinsert: /* @__PURE__ */ __name((...args) => new JsonArrInsertCommand(args, this.opts).exec(this.client), "arrinsert"),
      /**
       * @see https://redis.io/commands/json.arrlen
       */
      arrlen: /* @__PURE__ */ __name((...args) => new JsonArrLenCommand(args, this.opts).exec(this.client), "arrlen"),
      /**
       * @see https://redis.io/commands/json.arrpop
       */
      arrpop: /* @__PURE__ */ __name((...args) => new JsonArrPopCommand(args, this.opts).exec(this.client), "arrpop"),
      /**
       * @see https://redis.io/commands/json.arrtrim
       */
      arrtrim: /* @__PURE__ */ __name((...args) => new JsonArrTrimCommand(args, this.opts).exec(this.client), "arrtrim"),
      /**
       * @see https://redis.io/commands/json.clear
       */
      clear: /* @__PURE__ */ __name((...args) => new JsonClearCommand(args, this.opts).exec(this.client), "clear"),
      /**
       * @see https://redis.io/commands/json.del
       */
      del: /* @__PURE__ */ __name((...args) => new JsonDelCommand(args, this.opts).exec(this.client), "del"),
      /**
       * @see https://redis.io/commands/json.forget
       */
      forget: /* @__PURE__ */ __name((...args) => new JsonForgetCommand(args, this.opts).exec(this.client), "forget"),
      /**
       * @see https://redis.io/commands/json.get
       */
      get: /* @__PURE__ */ __name((...args) => new JsonGetCommand(args, this.opts).exec(this.client), "get"),
      /**
       * @see https://redis.io/commands/json.merge
       */
      merge: /* @__PURE__ */ __name((...args) => new JsonMergeCommand(args, this.opts).exec(this.client), "merge"),
      /**
       * @see https://redis.io/commands/json.mget
       */
      mget: /* @__PURE__ */ __name((...args) => new JsonMGetCommand(args, this.opts).exec(this.client), "mget"),
      /**
       * @see https://redis.io/commands/json.mset
       */
      mset: /* @__PURE__ */ __name((...args) => new JsonMSetCommand(args, this.opts).exec(this.client), "mset"),
      /**
       * @see https://redis.io/commands/json.numincrby
       */
      numincrby: /* @__PURE__ */ __name((...args) => new JsonNumIncrByCommand(args, this.opts).exec(this.client), "numincrby"),
      /**
       * @see https://redis.io/commands/json.nummultby
       */
      nummultby: /* @__PURE__ */ __name((...args) => new JsonNumMultByCommand(args, this.opts).exec(this.client), "nummultby"),
      /**
       * @see https://redis.io/commands/json.objkeys
       */
      objkeys: /* @__PURE__ */ __name((...args) => new JsonObjKeysCommand(args, this.opts).exec(this.client), "objkeys"),
      /**
       * @see https://redis.io/commands/json.objlen
       */
      objlen: /* @__PURE__ */ __name((...args) => new JsonObjLenCommand(args, this.opts).exec(this.client), "objlen"),
      /**
       * @see https://redis.io/commands/json.resp
       */
      resp: /* @__PURE__ */ __name((...args) => new JsonRespCommand(args, this.opts).exec(this.client), "resp"),
      /**
       * @see https://redis.io/commands/json.set
       */
      set: /* @__PURE__ */ __name((...args) => new JsonSetCommand(args, this.opts).exec(this.client), "set"),
      /**
       * @see https://redis.io/commands/json.strappend
       */
      strappend: /* @__PURE__ */ __name((...args) => new JsonStrAppendCommand(args, this.opts).exec(this.client), "strappend"),
      /**
       * @see https://redis.io/commands/json.strlen
       */
      strlen: /* @__PURE__ */ __name((...args) => new JsonStrLenCommand(args, this.opts).exec(this.client), "strlen"),
      /**
       * @see https://redis.io/commands/json.toggle
       */
      toggle: /* @__PURE__ */ __name((...args) => new JsonToggleCommand(args, this.opts).exec(this.client), "toggle"),
      /**
       * @see https://redis.io/commands/json.type
       */
      type: /* @__PURE__ */ __name((...args) => new JsonTypeCommand(args, this.opts).exec(this.client), "type")
    };
  }
  get functions() {
    return {
      /**
       * @see https://redis.io/docs/latest/commands/function-load/
       */
      load: /* @__PURE__ */ __name((...args) => new FunctionLoadCommand(args, this.opts).exec(this.client), "load"),
      /**
       * @see https://redis.io/docs/latest/commands/function-list/
       */
      list: /* @__PURE__ */ __name((...args) => new FunctionListCommand(args, this.opts).exec(this.client), "list"),
      /**
       * @see https://redis.io/docs/latest/commands/function-delete/
       */
      delete: /* @__PURE__ */ __name((...args) => new FunctionDeleteCommand(args, this.opts).exec(this.client), "delete"),
      /**
       * @see https://redis.io/docs/latest/commands/function-flush/
       */
      flush: /* @__PURE__ */ __name(() => new FunctionFlushCommand(this.opts).exec(this.client), "flush"),
      /**
       * @see https://redis.io/docs/latest/commands/function-stats/
       *
       * Note: `running_script` field is not supported and therefore not included in the type.
       */
      stats: /* @__PURE__ */ __name(() => new FunctionStatsCommand(this.opts).exec(this.client), "stats"),
      /**
       * @see https://redis.io/docs/latest/commands/fcall/
       */
      call: /* @__PURE__ */ __name((...args) => new FCallCommand(args, this.opts).exec(this.client), "call"),
      /**
       * @see https://redis.io/docs/latest/commands/fcall_ro/
       */
      callRo: /* @__PURE__ */ __name((...args) => new FCallRoCommand(args, this.opts).exec(this.client), "callRo")
    };
  }
  /**
   * Wrap a new middleware around the HTTP client.
   */
  use = /* @__PURE__ */ __name((middleware) => {
    const makeRequest = this.client.request.bind(this.client);
    this.client.request = (req) => middleware(req, makeRequest);
  }, "use");
  /**
   * Technically this is not private, we can hide it from intellisense by doing this
   */
  addTelemetry = /* @__PURE__ */ __name((telemetry) => {
    if (!this.enableTelemetry) {
      return;
    }
    try {
      this.client.mergeTelemetry(telemetry);
    } catch {
    }
  }, "addTelemetry");
  /**
   * Creates a new script.
   *
   * Scripts offer the ability to optimistically try to execute a script without having to send the
   * entire script to the server. If the script is loaded on the server, it tries again by sending
   * the entire script. Afterwards, the script is cached on the server.
   *
   * @param script - The script to create
   * @param opts - Optional options to pass to the script `{ readonly?: boolean }`
   * @returns A new script
   *
   * @example
   * ```ts
   * const redis = new Redis({...})
   *
   * const script = redis.createScript<string>("return ARGV[1];")
   * const arg1 = await script.eval([], ["Hello World"])
   * expect(arg1, "Hello World")
   * ```
   * @example
   * ```ts
   * const redis = new Redis({...})
   *
   * const script = redis.createScript<string>("return ARGV[1];", { readonly: true })
   * const arg1 = await script.evalRo([], ["Hello World"])
   * expect(arg1, "Hello World")
   * ```
   */
  createScript(script, opts) {
    return opts?.readonly ? new ScriptRO(this, script) : new Script(this, script);
  }
  get search() {
    return {
      createIndex: /* @__PURE__ */ __name((params) => {
        return createIndex(this.client, params);
      }, "createIndex"),
      index: /* @__PURE__ */ __name((params) => {
        return initIndex(this.client, params);
      }, "index"),
      alias: {
        list: /* @__PURE__ */ __name(() => {
          return listAliases(this.client);
        }, "list"),
        add: /* @__PURE__ */ __name(({ indexName, alias }) => {
          return addAlias(this.client, { indexName, alias });
        }, "add"),
        delete: /* @__PURE__ */ __name(({ alias }) => {
          return delAlias(this.client, { alias });
        }, "delete")
      }
    };
  }
  /**
   * Create a new pipeline that allows you to send requests in bulk.
   *
   * @see {@link Pipeline}
   */
  pipeline = /* @__PURE__ */ __name(() => new Pipeline({
    client: this.client,
    commandOptions: this.opts,
    multiExec: false
  }), "pipeline");
  autoPipeline = /* @__PURE__ */ __name(() => {
    return createAutoPipelineProxy(this);
  }, "autoPipeline");
  /**
   * Create a new transaction to allow executing multiple steps atomically.
   *
   * All the commands in a transaction are serialized and executed sequentially. A request sent by
   * another client will never be served in the middle of the execution of a Redis Transaction. This
   * guarantees that the commands are executed as a single isolated operation.
   *
   * @see {@link Pipeline}
   */
  multi = /* @__PURE__ */ __name(() => new Pipeline({
    client: this.client,
    commandOptions: this.opts,
    multiExec: true
  }), "multi");
  /**
   * Returns an instance that can be used to execute `BITFIELD` commands on one key.
   *
   * @example
   * ```typescript
   * redis.set("mykey", 0);
   * const result = await redis.bitfield("mykey")
   *   .set("u4", 0, 16)
   *   .incr("u4", "#1", 1)
   *   .exec();
   * console.log(result); // [0, 1]
   * ```
   *
   * @see https://redis.io/commands/bitfield
   */
  bitfield = /* @__PURE__ */ __name((...args) => new BitFieldCommand(args, this.client, this.opts), "bitfield");
  /**
   * @see https://redis.io/commands/append
   */
  append = /* @__PURE__ */ __name((...args) => new AppendCommand(args, this.opts).exec(this.client), "append");
  /**
   * @see https://redis.io/commands/bitcount
   */
  bitcount = /* @__PURE__ */ __name((...args) => new BitCountCommand(args, this.opts).exec(this.client), "bitcount");
  /**
   * @see https://redis.io/commands/bitop
   */
  bitop = /* @__PURE__ */ __name((op, destinationKey, sourceKey, ...sourceKeys) => new BitOpCommand([op, destinationKey, sourceKey, ...sourceKeys], this.opts).exec(
    this.client
  ), "bitop");
  /**
   * @see https://redis.io/commands/bitpos
   */
  bitpos = /* @__PURE__ */ __name((...args) => new BitPosCommand(args, this.opts).exec(this.client), "bitpos");
  /**
   * @see https://redis.io/commands/client-setinfo
   */
  clientSetinfo = /* @__PURE__ */ __name((...args) => new ClientSetInfoCommand(args, this.opts).exec(this.client), "clientSetinfo");
  /**
   * @see https://redis.io/commands/copy
   */
  copy = /* @__PURE__ */ __name((...args) => new CopyCommand(args, this.opts).exec(this.client), "copy");
  /**
   * @see https://redis.io/commands/dbsize
   */
  dbsize = /* @__PURE__ */ __name(() => new DBSizeCommand(this.opts).exec(this.client), "dbsize");
  /**
   * @see https://redis.io/commands/decr
   */
  decr = /* @__PURE__ */ __name((...args) => new DecrCommand(args, this.opts).exec(this.client), "decr");
  /**
   * @see https://redis.io/commands/decrby
   */
  decrby = /* @__PURE__ */ __name((...args) => new DecrByCommand(args, this.opts).exec(this.client), "decrby");
  /**
   * @see https://redis.io/commands/del
   */
  del = /* @__PURE__ */ __name((...args) => new DelCommand(args, this.opts).exec(this.client), "del");
  /**
   * @see https://redis.io/commands/echo
   */
  echo = /* @__PURE__ */ __name((...args) => new EchoCommand(args, this.opts).exec(this.client), "echo");
  /**
   * @see https://redis.io/commands/eval_ro
   */
  evalRo = /* @__PURE__ */ __name((...args) => new EvalROCommand(args, this.opts).exec(this.client), "evalRo");
  /**
   * @see https://redis.io/commands/eval
   */
  eval = /* @__PURE__ */ __name((...args) => new EvalCommand(args, this.opts).exec(this.client), "eval");
  /**
   * @see https://redis.io/commands/evalsha_ro
   */
  evalshaRo = /* @__PURE__ */ __name((...args) => new EvalshaROCommand(args, this.opts).exec(this.client), "evalshaRo");
  /**
   * @see https://redis.io/commands/evalsha
   */
  evalsha = /* @__PURE__ */ __name((...args) => new EvalshaCommand(args, this.opts).exec(this.client), "evalsha");
  /**
   * Generic method to execute any Redis command.
   */
  exec = /* @__PURE__ */ __name((args) => new ExecCommand(args, this.opts).exec(this.client), "exec");
  /**
   * @see https://redis.io/commands/exists
   */
  exists = /* @__PURE__ */ __name((...args) => new ExistsCommand(args, this.opts).exec(this.client), "exists");
  /**
   * @see https://redis.io/commands/expire
   */
  expire = /* @__PURE__ */ __name((...args) => new ExpireCommand(args, this.opts).exec(this.client), "expire");
  /**
   * @see https://redis.io/commands/expireat
   */
  expireat = /* @__PURE__ */ __name((...args) => new ExpireAtCommand(args, this.opts).exec(this.client), "expireat");
  /**
   * @see https://redis.io/commands/flushall
   */
  flushall = /* @__PURE__ */ __name((args) => new FlushAllCommand(args, this.opts).exec(this.client), "flushall");
  /**
   * @see https://redis.io/commands/flushdb
   */
  flushdb = /* @__PURE__ */ __name((...args) => new FlushDBCommand(args, this.opts).exec(this.client), "flushdb");
  /**
   * @see https://redis.io/commands/geoadd
   */
  geoadd = /* @__PURE__ */ __name((...args) => new GeoAddCommand(args, this.opts).exec(this.client), "geoadd");
  /**
   * @see https://redis.io/commands/geopos
   */
  geopos = /* @__PURE__ */ __name((...args) => new GeoPosCommand(args, this.opts).exec(this.client), "geopos");
  /**
   * @see https://redis.io/commands/geodist
   */
  geodist = /* @__PURE__ */ __name((...args) => new GeoDistCommand(args, this.opts).exec(this.client), "geodist");
  /**
   * @see https://redis.io/commands/geohash
   */
  geohash = /* @__PURE__ */ __name((...args) => new GeoHashCommand(args, this.opts).exec(this.client), "geohash");
  /**
   * @see https://redis.io/commands/geosearch
   */
  geosearch = /* @__PURE__ */ __name((...args) => new GeoSearchCommand(args, this.opts).exec(this.client), "geosearch");
  /**
   * @see https://redis.io/commands/geosearchstore
   */
  geosearchstore = /* @__PURE__ */ __name((...args) => new GeoSearchStoreCommand(args, this.opts).exec(this.client), "geosearchstore");
  /**
   * @see https://redis.io/commands/get
   */
  get = /* @__PURE__ */ __name((...args) => new GetCommand(args, this.opts).exec(this.client), "get");
  /**
   * @see https://redis.io/commands/getbit
   */
  getbit = /* @__PURE__ */ __name((...args) => new GetBitCommand(args, this.opts).exec(this.client), "getbit");
  /**
   * @see https://redis.io/commands/getdel
   */
  getdel = /* @__PURE__ */ __name((...args) => new GetDelCommand(args, this.opts).exec(this.client), "getdel");
  /**
   * @see https://redis.io/commands/getex
   */
  getex = /* @__PURE__ */ __name((...args) => new GetExCommand(args, this.opts).exec(this.client), "getex");
  /**
   * @see https://redis.io/commands/getrange
   */
  getrange = /* @__PURE__ */ __name((...args) => new GetRangeCommand(args, this.opts).exec(this.client), "getrange");
  /**
   * @see https://redis.io/commands/getset
   */
  getset = /* @__PURE__ */ __name((key, value) => new GetSetCommand([key, value], this.opts).exec(this.client), "getset");
  /**
   * @see https://redis.io/commands/hdel
   */
  hdel = /* @__PURE__ */ __name((...args) => new HDelCommand(args, this.opts).exec(this.client), "hdel");
  /**
   * @see https://redis.io/commands/hexists
   */
  hexists = /* @__PURE__ */ __name((...args) => new HExistsCommand(args, this.opts).exec(this.client), "hexists");
  /**
   * @see https://redis.io/commands/hexpire
   */
  hexpire = /* @__PURE__ */ __name((...args) => new HExpireCommand(args, this.opts).exec(this.client), "hexpire");
  /**
   * @see https://redis.io/commands/hexpireat
   */
  hexpireat = /* @__PURE__ */ __name((...args) => new HExpireAtCommand(args, this.opts).exec(this.client), "hexpireat");
  /**
   * @see https://redis.io/commands/hexpiretime
   */
  hexpiretime = /* @__PURE__ */ __name((...args) => new HExpireTimeCommand(args, this.opts).exec(this.client), "hexpiretime");
  /**
   * @see https://redis.io/commands/httl
   */
  httl = /* @__PURE__ */ __name((...args) => new HTtlCommand(args, this.opts).exec(this.client), "httl");
  /**
   * @see https://redis.io/commands/hpexpire
   */
  hpexpire = /* @__PURE__ */ __name((...args) => new HPExpireCommand(args, this.opts).exec(this.client), "hpexpire");
  /**
   * @see https://redis.io/commands/hpexpireat
   */
  hpexpireat = /* @__PURE__ */ __name((...args) => new HPExpireAtCommand(args, this.opts).exec(this.client), "hpexpireat");
  /**
   * @see https://redis.io/commands/hpexpiretime
   */
  hpexpiretime = /* @__PURE__ */ __name((...args) => new HPExpireTimeCommand(args, this.opts).exec(this.client), "hpexpiretime");
  /**
   * @see https://redis.io/commands/hpttl
   */
  hpttl = /* @__PURE__ */ __name((...args) => new HPTtlCommand(args, this.opts).exec(this.client), "hpttl");
  /**
   * @see https://redis.io/commands/hpersist
   */
  hpersist = /* @__PURE__ */ __name((...args) => new HPersistCommand(args, this.opts).exec(this.client), "hpersist");
  /**
   * @see https://redis.io/commands/hget
   */
  hget = /* @__PURE__ */ __name((...args) => new HGetCommand(args, this.opts).exec(this.client), "hget");
  /**
   * @see https://redis.io/commands/hgetall
   */
  hgetall = /* @__PURE__ */ __name((...args) => new HGetAllCommand(args, this.opts).exec(this.client), "hgetall");
  /**
   * @see https://redis.io/commands/hgetdel
   */
  hgetdel = /* @__PURE__ */ __name((...args) => new HGetDelCommand(args, this.opts).exec(this.client), "hgetdel");
  /**
   * @see https://redis.io/commands/hgetex
   */
  hgetex = /* @__PURE__ */ __name((...args) => new HGetExCommand(args, this.opts).exec(this.client), "hgetex");
  /**
   * @see https://redis.io/commands/hincrby
   */
  hincrby = /* @__PURE__ */ __name((...args) => new HIncrByCommand(args, this.opts).exec(this.client), "hincrby");
  /**
   * @see https://redis.io/commands/hincrbyfloat
   */
  hincrbyfloat = /* @__PURE__ */ __name((...args) => new HIncrByFloatCommand(args, this.opts).exec(this.client), "hincrbyfloat");
  /**
   * @see https://redis.io/commands/hkeys
   */
  hkeys = /* @__PURE__ */ __name((...args) => new HKeysCommand(args, this.opts).exec(this.client), "hkeys");
  /**
   * @see https://redis.io/commands/hlen
   */
  hlen = /* @__PURE__ */ __name((...args) => new HLenCommand(args, this.opts).exec(this.client), "hlen");
  /**
   * @see https://redis.io/commands/hmget
   */
  hmget = /* @__PURE__ */ __name((...args) => new HMGetCommand(args, this.opts).exec(this.client), "hmget");
  /**
   * @see https://redis.io/commands/hmset
   */
  hmset = /* @__PURE__ */ __name((key, kv) => new HMSetCommand([key, kv], this.opts).exec(this.client), "hmset");
  /**
   * @see https://redis.io/commands/hrandfield
   */
  hrandfield = /* @__PURE__ */ __name((key, count3, withValues) => new HRandFieldCommand([key, count3, withValues], this.opts).exec(this.client), "hrandfield");
  /**
   * @see https://redis.io/commands/hscan
   */
  hscan = /* @__PURE__ */ __name((...args) => new HScanCommand(args, this.opts).exec(this.client), "hscan");
  /**
   * @see https://redis.io/commands/hset
   */
  hset = /* @__PURE__ */ __name((key, kv) => new HSetCommand([key, kv], this.opts).exec(this.client), "hset");
  /**
   * @see https://redis.io/commands/hsetex
   */
  hsetex = /* @__PURE__ */ __name((...args) => new HSetExCommand(args, this.opts).exec(this.client), "hsetex");
  /**
   * @see https://redis.io/commands/hsetnx
   */
  hsetnx = /* @__PURE__ */ __name((key, field, value) => new HSetNXCommand([key, field, value], this.opts).exec(this.client), "hsetnx");
  /**
   * @see https://redis.io/commands/hstrlen
   */
  hstrlen = /* @__PURE__ */ __name((...args) => new HStrLenCommand(args, this.opts).exec(this.client), "hstrlen");
  /**
   * @see https://redis.io/commands/hvals
   */
  hvals = /* @__PURE__ */ __name((...args) => new HValsCommand(args, this.opts).exec(this.client), "hvals");
  /**
   * @see https://redis.io/commands/incr
   */
  incr = /* @__PURE__ */ __name((...args) => new IncrCommand(args, this.opts).exec(this.client), "incr");
  /**
   * @see https://redis.io/commands/incrby
   */
  incrby = /* @__PURE__ */ __name((...args) => new IncrByCommand(args, this.opts).exec(this.client), "incrby");
  /**
   * @see https://redis.io/commands/incrbyfloat
   */
  incrbyfloat = /* @__PURE__ */ __name((...args) => new IncrByFloatCommand(args, this.opts).exec(this.client), "incrbyfloat");
  /**
   * @see https://redis.io/commands/keys
   */
  keys = /* @__PURE__ */ __name((...args) => new KeysCommand(args, this.opts).exec(this.client), "keys");
  /**
   * @see https://redis.io/commands/lindex
   */
  lindex = /* @__PURE__ */ __name((...args) => new LIndexCommand(args, this.opts).exec(this.client), "lindex");
  /**
   * @see https://redis.io/commands/linsert
   */
  linsert = /* @__PURE__ */ __name((key, direction, pivot, value) => new LInsertCommand([key, direction, pivot, value], this.opts).exec(this.client), "linsert");
  /**
   * @see https://redis.io/commands/llen
   */
  llen = /* @__PURE__ */ __name((...args) => new LLenCommand(args, this.opts).exec(this.client), "llen");
  /**
   * @see https://redis.io/commands/lmove
   */
  lmove = /* @__PURE__ */ __name((...args) => new LMoveCommand(args, this.opts).exec(this.client), "lmove");
  /**
   * @see https://redis.io/commands/lpop
   */
  lpop = /* @__PURE__ */ __name((...args) => new LPopCommand(args, this.opts).exec(this.client), "lpop");
  /**
   * @see https://redis.io/commands/lmpop
   */
  lmpop = /* @__PURE__ */ __name((...args) => new LmPopCommand(args, this.opts).exec(this.client), "lmpop");
  /**
   * @see https://redis.io/commands/lpos
   */
  lpos = /* @__PURE__ */ __name((...args) => new LPosCommand(args, this.opts).exec(this.client), "lpos");
  /**
   * @see https://redis.io/commands/lpush
   */
  lpush = /* @__PURE__ */ __name((key, ...elements) => new LPushCommand([key, ...elements], this.opts).exec(this.client), "lpush");
  /**
   * @see https://redis.io/commands/lpushx
   */
  lpushx = /* @__PURE__ */ __name((key, ...elements) => new LPushXCommand([key, ...elements], this.opts).exec(this.client), "lpushx");
  /**
   * @see https://redis.io/commands/lrange
   */
  lrange = /* @__PURE__ */ __name((...args) => new LRangeCommand(args, this.opts).exec(this.client), "lrange");
  /**
   * @see https://redis.io/commands/lrem
   */
  lrem = /* @__PURE__ */ __name((key, count3, value) => new LRemCommand([key, count3, value], this.opts).exec(this.client), "lrem");
  /**
   * @see https://redis.io/commands/lset
   */
  lset = /* @__PURE__ */ __name((key, index, value) => new LSetCommand([key, index, value], this.opts).exec(this.client), "lset");
  /**
   * @see https://redis.io/commands/ltrim
   */
  ltrim = /* @__PURE__ */ __name((...args) => new LTrimCommand(args, this.opts).exec(this.client), "ltrim");
  /**
   * @see https://redis.io/commands/mget
   */
  mget = /* @__PURE__ */ __name((...args) => new MGetCommand(args, this.opts).exec(this.client), "mget");
  /**
   * @see https://redis.io/commands/mset
   */
  mset = /* @__PURE__ */ __name((kv) => new MSetCommand([kv], this.opts).exec(this.client), "mset");
  /**
   * @see https://redis.io/commands/msetnx
   */
  msetnx = /* @__PURE__ */ __name((kv) => new MSetNXCommand([kv], this.opts).exec(this.client), "msetnx");
  /**
   * @see https://redis.io/commands/persist
   */
  persist = /* @__PURE__ */ __name((...args) => new PersistCommand(args, this.opts).exec(this.client), "persist");
  /**
   * @see https://redis.io/commands/pexpire
   */
  pexpire = /* @__PURE__ */ __name((...args) => new PExpireCommand(args, this.opts).exec(this.client), "pexpire");
  /**
   * @see https://redis.io/commands/pexpireat
   */
  pexpireat = /* @__PURE__ */ __name((...args) => new PExpireAtCommand(args, this.opts).exec(this.client), "pexpireat");
  /**
   * @see https://redis.io/commands/pfadd
   */
  pfadd = /* @__PURE__ */ __name((...args) => new PfAddCommand(args, this.opts).exec(this.client), "pfadd");
  /**
   * @see https://redis.io/commands/pfcount
   */
  pfcount = /* @__PURE__ */ __name((...args) => new PfCountCommand(args, this.opts).exec(this.client), "pfcount");
  /**
   * @see https://redis.io/commands/pfmerge
   */
  pfmerge = /* @__PURE__ */ __name((...args) => new PfMergeCommand(args, this.opts).exec(this.client), "pfmerge");
  /**
   * @see https://redis.io/commands/ping
   */
  ping = /* @__PURE__ */ __name((args) => new PingCommand(args, this.opts).exec(this.client), "ping");
  /**
   * @see https://redis.io/commands/psetex
   */
  psetex = /* @__PURE__ */ __name((key, ttl, value) => new PSetEXCommand([key, ttl, value], this.opts).exec(this.client), "psetex");
  /**
   * @see https://redis.io/commands/psubscribe
   */
  psubscribe = /* @__PURE__ */ __name((patterns) => {
    const patternArray = Array.isArray(patterns) ? patterns : [patterns];
    return new Subscriber(this.client, patternArray, true, this.opts);
  }, "psubscribe");
  /**
   * @see https://redis.io/commands/pttl
   */
  pttl = /* @__PURE__ */ __name((...args) => new PTtlCommand(args, this.opts).exec(this.client), "pttl");
  /**
   * @see https://redis.io/commands/publish
   */
  publish = /* @__PURE__ */ __name((...args) => new PublishCommand(args, this.opts).exec(this.client), "publish");
  /**
   * @see https://redis.io/commands/randomkey
   */
  randomkey = /* @__PURE__ */ __name(() => new RandomKeyCommand().exec(this.client), "randomkey");
  /**
   * @see https://redis.io/commands/rename
   */
  rename = /* @__PURE__ */ __name((...args) => new RenameCommand(args, this.opts).exec(this.client), "rename");
  /**
   * @see https://redis.io/commands/renamenx
   */
  renamenx = /* @__PURE__ */ __name((...args) => new RenameNXCommand(args, this.opts).exec(this.client), "renamenx");
  /**
   * @see https://redis.io/commands/rpop
   */
  rpop = /* @__PURE__ */ __name((...args) => new RPopCommand(args, this.opts).exec(this.client), "rpop");
  /**
   * @see https://redis.io/commands/rpush
   */
  rpush = /* @__PURE__ */ __name((key, ...elements) => new RPushCommand([key, ...elements], this.opts).exec(this.client), "rpush");
  /**
   * @see https://redis.io/commands/rpushx
   */
  rpushx = /* @__PURE__ */ __name((key, ...elements) => new RPushXCommand([key, ...elements], this.opts).exec(this.client), "rpushx");
  /**
   * @see https://redis.io/commands/sadd
   */
  sadd = /* @__PURE__ */ __name((key, member, ...members) => new SAddCommand([key, member, ...members], this.opts).exec(this.client), "sadd");
  scan(cursor, opts) {
    return new ScanCommand([cursor, opts], this.opts).exec(this.client);
  }
  /**
   * @see https://redis.io/commands/scard
   */
  scard = /* @__PURE__ */ __name((...args) => new SCardCommand(args, this.opts).exec(this.client), "scard");
  /**
   * @see https://redis.io/commands/script-exists
   */
  scriptExists = /* @__PURE__ */ __name((...args) => new ScriptExistsCommand(args, this.opts).exec(this.client), "scriptExists");
  /**
   * @see https://redis.io/commands/script-flush
   */
  scriptFlush = /* @__PURE__ */ __name((...args) => new ScriptFlushCommand(args, this.opts).exec(this.client), "scriptFlush");
  /**
   * @see https://redis.io/commands/script-load
   */
  scriptLoad = /* @__PURE__ */ __name((...args) => new ScriptLoadCommand(args, this.opts).exec(this.client), "scriptLoad");
  /**
   * @see https://redis.io/commands/sdiff
   */
  sdiff = /* @__PURE__ */ __name((...args) => new SDiffCommand(args, this.opts).exec(this.client), "sdiff");
  /**
   * @see https://redis.io/commands/sdiffstore
   */
  sdiffstore = /* @__PURE__ */ __name((...args) => new SDiffStoreCommand(args, this.opts).exec(this.client), "sdiffstore");
  /**
   * @see https://redis.io/commands/set
   */
  set = /* @__PURE__ */ __name((key, value, opts) => new SetCommand([key, value, opts], this.opts).exec(this.client), "set");
  /**
   * @see https://redis.io/commands/setbit
   */
  setbit = /* @__PURE__ */ __name((...args) => new SetBitCommand(args, this.opts).exec(this.client), "setbit");
  /**
   * @see https://redis.io/commands/setex
   */
  setex = /* @__PURE__ */ __name((key, ttl, value) => new SetExCommand([key, ttl, value], this.opts).exec(this.client), "setex");
  /**
   * @see https://redis.io/commands/setnx
   */
  setnx = /* @__PURE__ */ __name((key, value) => new SetNxCommand([key, value], this.opts).exec(this.client), "setnx");
  /**
   * @see https://redis.io/commands/setrange
   */
  setrange = /* @__PURE__ */ __name((...args) => new SetRangeCommand(args, this.opts).exec(this.client), "setrange");
  /**
   * @see https://redis.io/commands/sinter
   */
  sinter = /* @__PURE__ */ __name((...args) => new SInterCommand(args, this.opts).exec(this.client), "sinter");
  /**
   * @see https://redis.io/commands/sintercard
   */
  sintercard = /* @__PURE__ */ __name((...args) => new SInterCardCommand(args, this.opts).exec(this.client), "sintercard");
  /**
   * @see https://redis.io/commands/sinterstore
   */
  sinterstore = /* @__PURE__ */ __name((...args) => new SInterStoreCommand(args, this.opts).exec(this.client), "sinterstore");
  /**
   * @see https://redis.io/commands/sismember
   */
  sismember = /* @__PURE__ */ __name((key, member) => new SIsMemberCommand([key, member], this.opts).exec(this.client), "sismember");
  /**
   * @see https://redis.io/commands/smismember
   */
  smismember = /* @__PURE__ */ __name((key, members) => new SMIsMemberCommand([key, members], this.opts).exec(this.client), "smismember");
  /**
   * @see https://redis.io/commands/smembers
   */
  smembers = /* @__PURE__ */ __name((...args) => new SMembersCommand(args, this.opts).exec(this.client), "smembers");
  /**
   * @see https://redis.io/commands/smove
   */
  smove = /* @__PURE__ */ __name((source, destination, member) => new SMoveCommand([source, destination, member], this.opts).exec(this.client), "smove");
  /**
   * @see https://redis.io/commands/spop
   */
  spop = /* @__PURE__ */ __name((...args) => new SPopCommand(args, this.opts).exec(this.client), "spop");
  /**
   * @see https://redis.io/commands/srandmember
   */
  srandmember = /* @__PURE__ */ __name((...args) => new SRandMemberCommand(args, this.opts).exec(this.client), "srandmember");
  /**
   * @see https://redis.io/commands/srem
   */
  srem = /* @__PURE__ */ __name((key, ...members) => new SRemCommand([key, ...members], this.opts).exec(this.client), "srem");
  /**
   * @see https://redis.io/commands/sscan
   */
  sscan = /* @__PURE__ */ __name((...args) => new SScanCommand(args, this.opts).exec(this.client), "sscan");
  /**
   * @see https://redis.io/commands/strlen
   */
  strlen = /* @__PURE__ */ __name((...args) => new StrLenCommand(args, this.opts).exec(this.client), "strlen");
  /**
   * @see https://redis.io/commands/subscribe
   */
  subscribe = /* @__PURE__ */ __name((channels) => {
    const channelArray = Array.isArray(channels) ? channels : [channels];
    return new Subscriber(this.client, channelArray, false, this.opts);
  }, "subscribe");
  /**
   * @see https://redis.io/commands/sunion
   */
  sunion = /* @__PURE__ */ __name((...args) => new SUnionCommand(args, this.opts).exec(this.client), "sunion");
  /**
   * @see https://redis.io/commands/sunionstore
   */
  sunionstore = /* @__PURE__ */ __name((...args) => new SUnionStoreCommand(args, this.opts).exec(this.client), "sunionstore");
  /**
   * @see https://redis.io/commands/time
   */
  time = /* @__PURE__ */ __name(() => new TimeCommand().exec(this.client), "time");
  /**
   * @see https://redis.io/commands/touch
   */
  touch = /* @__PURE__ */ __name((...args) => new TouchCommand(args, this.opts).exec(this.client), "touch");
  /**
   * @see https://redis.io/commands/ttl
   */
  ttl = /* @__PURE__ */ __name((...args) => new TtlCommand(args, this.opts).exec(this.client), "ttl");
  /**
   * @see https://redis.io/commands/type
   */
  type = /* @__PURE__ */ __name((...args) => new TypeCommand(args, this.opts).exec(this.client), "type");
  /**
   * @see https://redis.io/commands/unlink
   */
  unlink = /* @__PURE__ */ __name((...args) => new UnlinkCommand(args, this.opts).exec(this.client), "unlink");
  /**
   * @see https://redis.io/commands/xadd
   */
  xadd = /* @__PURE__ */ __name((...args) => new XAddCommand(args, this.opts).exec(this.client), "xadd");
  /**
   * @see https://redis.io/commands/xack
   */
  xack = /* @__PURE__ */ __name((...args) => new XAckCommand(args, this.opts).exec(this.client), "xack");
  /**
   * @see https://redis.io/commands/xackdel
   */
  xackdel = /* @__PURE__ */ __name((...args) => new XAckDelCommand(args, this.opts).exec(this.client), "xackdel");
  /**
   * @see https://redis.io/commands/xdel
   */
  xdel = /* @__PURE__ */ __name((...args) => new XDelCommand(args, this.opts).exec(this.client), "xdel");
  /**
   * @see https://redis.io/commands/xdelex
   */
  xdelex = /* @__PURE__ */ __name((...args) => new XDelExCommand(args, this.opts).exec(this.client), "xdelex");
  /**
   * @see https://redis.io/commands/xgroup
   */
  xgroup = /* @__PURE__ */ __name((...args) => new XGroupCommand(args, this.opts).exec(this.client), "xgroup");
  /**
   * @see https://redis.io/commands/xread
   */
  xread = /* @__PURE__ */ __name((...args) => new XReadCommand(args, this.opts).exec(this.client), "xread");
  /**
   * @see https://redis.io/commands/xreadgroup
   */
  xreadgroup = /* @__PURE__ */ __name((...args) => new XReadGroupCommand(args, this.opts).exec(this.client), "xreadgroup");
  /**
   * @see https://redis.io/commands/xinfo
   */
  xinfo = /* @__PURE__ */ __name((...args) => new XInfoCommand(args, this.opts).exec(this.client), "xinfo");
  /**
   * @see https://redis.io/commands/xlen
   */
  xlen = /* @__PURE__ */ __name((...args) => new XLenCommand(args, this.opts).exec(this.client), "xlen");
  /**
   * @see https://redis.io/commands/xpending
   */
  xpending = /* @__PURE__ */ __name((...args) => new XPendingCommand(args, this.opts).exec(this.client), "xpending");
  /**
   * @see https://redis.io/commands/xclaim
   */
  xclaim = /* @__PURE__ */ __name((...args) => new XClaimCommand(args, this.opts).exec(this.client), "xclaim");
  /**
   * @see https://redis.io/commands/xautoclaim
   */
  xautoclaim = /* @__PURE__ */ __name((...args) => new XAutoClaim(args, this.opts).exec(this.client), "xautoclaim");
  /**
   * @see https://redis.io/commands/xtrim
   */
  xtrim = /* @__PURE__ */ __name((...args) => new XTrimCommand(args, this.opts).exec(this.client), "xtrim");
  /**
   * @see https://redis.io/commands/xrange
   */
  xrange = /* @__PURE__ */ __name((...args) => new XRangeCommand(args, this.opts).exec(this.client), "xrange");
  /**
   * @see https://redis.io/commands/xrevrange
   */
  xrevrange = /* @__PURE__ */ __name((...args) => new XRevRangeCommand(args, this.opts).exec(this.client), "xrevrange");
  /**
   * @see https://redis.io/commands/zadd
   */
  zadd = /* @__PURE__ */ __name((...args) => {
    if ("score" in args[1]) {
      return new ZAddCommand([args[0], args[1], ...args.slice(2)], this.opts).exec(
        this.client
      );
    }
    return new ZAddCommand(
      [args[0], args[1], ...args.slice(2)],
      this.opts
    ).exec(this.client);
  }, "zadd");
  /**
   * @see https://redis.io/commands/zcard
   */
  zcard = /* @__PURE__ */ __name((...args) => new ZCardCommand(args, this.opts).exec(this.client), "zcard");
  /**
   * @see https://redis.io/commands/zcount
   */
  zcount = /* @__PURE__ */ __name((...args) => new ZCountCommand(args, this.opts).exec(this.client), "zcount");
  /**
   * @see https://redis.io/commands/zdiffstore
   */
  zdiffstore = /* @__PURE__ */ __name((...args) => new ZDiffStoreCommand(args, this.opts).exec(this.client), "zdiffstore");
  /**
   * @see https://redis.io/commands/zincrby
   */
  zincrby = /* @__PURE__ */ __name((key, increment, member) => new ZIncrByCommand([key, increment, member], this.opts).exec(this.client), "zincrby");
  /**
   * @see https://redis.io/commands/zinterstore
   */
  zinterstore = /* @__PURE__ */ __name((...args) => new ZInterStoreCommand(args, this.opts).exec(this.client), "zinterstore");
  /**
   * @see https://redis.io/commands/zlexcount
   */
  zlexcount = /* @__PURE__ */ __name((...args) => new ZLexCountCommand(args, this.opts).exec(this.client), "zlexcount");
  /**
   * @see https://redis.io/commands/zmscore
   */
  zmscore = /* @__PURE__ */ __name((...args) => new ZMScoreCommand(args, this.opts).exec(this.client), "zmscore");
  /**
   * @see https://redis.io/commands/zpopmax
   */
  zpopmax = /* @__PURE__ */ __name((...args) => new ZPopMaxCommand(args, this.opts).exec(this.client), "zpopmax");
  /**
   * @see https://redis.io/commands/zpopmin
   */
  zpopmin = /* @__PURE__ */ __name((...args) => new ZPopMinCommand(args, this.opts).exec(this.client), "zpopmin");
  /**
   * @see https://redis.io/commands/zrange
   */
  zrange = /* @__PURE__ */ __name((...args) => new ZRangeCommand(args, this.opts).exec(this.client), "zrange");
  /**
   * @see https://redis.io/commands/zrank
   */
  zrank = /* @__PURE__ */ __name((key, member) => new ZRankCommand([key, member], this.opts).exec(this.client), "zrank");
  /**
   * @see https://redis.io/commands/zrem
   */
  zrem = /* @__PURE__ */ __name((key, ...members) => new ZRemCommand([key, ...members], this.opts).exec(this.client), "zrem");
  /**
   * @see https://redis.io/commands/zremrangebylex
   */
  zremrangebylex = /* @__PURE__ */ __name((...args) => new ZRemRangeByLexCommand(args, this.opts).exec(this.client), "zremrangebylex");
  /**
   * @see https://redis.io/commands/zremrangebyrank
   */
  zremrangebyrank = /* @__PURE__ */ __name((...args) => new ZRemRangeByRankCommand(args, this.opts).exec(this.client), "zremrangebyrank");
  /**
   * @see https://redis.io/commands/zremrangebyscore
   */
  zremrangebyscore = /* @__PURE__ */ __name((...args) => new ZRemRangeByScoreCommand(args, this.opts).exec(this.client), "zremrangebyscore");
  /**
   * @see https://redis.io/commands/zrevrank
   */
  zrevrank = /* @__PURE__ */ __name((key, member) => new ZRevRankCommand([key, member], this.opts).exec(this.client), "zrevrank");
  /**
   * @see https://redis.io/commands/zscan
   */
  zscan = /* @__PURE__ */ __name((...args) => new ZScanCommand(args, this.opts).exec(this.client), "zscan");
  /**
   * @see https://redis.io/commands/zscore
   */
  zscore = /* @__PURE__ */ __name((key, member) => new ZScoreCommand([key, member], this.opts).exec(this.client), "zscore");
  /**
   * @see https://redis.io/commands/zunion
   */
  zunion = /* @__PURE__ */ __name((...args) => new ZUnionCommand(args, this.opts).exec(this.client), "zunion");
  /**
   * @see https://redis.io/commands/zunionstore
   */
  zunionstore = /* @__PURE__ */ __name((...args) => new ZUnionStoreCommand(args, this.opts).exec(this.client), "zunionstore");
};
var VERSION = "v1.30.2";

// node_modules/@upstash/redis/nodejs.mjs
var BUILD = /* @__PURE__ */ Symbol("build");
var TextFieldBuilder = class _TextFieldBuilder {
  static {
    __name(this, "_TextFieldBuilder");
  }
  _noTokenize;
  _noStem;
  _from;
  constructor(noTokenize = { noTokenize: false }, noStem = { noStem: false }, from = { from: null }) {
    this._noTokenize = noTokenize;
    this._noStem = noStem;
    this._from = from;
  }
  noTokenize() {
    return new _TextFieldBuilder({ noTokenize: true }, this._noStem, this._from);
  }
  noStem() {
    return new _TextFieldBuilder(this._noTokenize, { noStem: true }, this._from);
  }
  from(field) {
    return new _TextFieldBuilder(this._noTokenize, this._noStem, { from: field });
  }
  [BUILD]() {
    return {
      type: "TEXT",
      ...this._noTokenize.noTokenize ? { noTokenize: true } : {},
      ...this._noStem.noStem ? { noStem: true } : {},
      ...this._from.from ? { from: this._from.from } : {}
    };
  }
};
var NumericFieldBuilder = class _NumericFieldBuilder {
  static {
    __name(this, "_NumericFieldBuilder");
  }
  type;
  _from;
  constructor(type, from = { from: null }) {
    this.type = type;
    this._from = from;
  }
  from(field) {
    return new _NumericFieldBuilder(this.type, { from: field });
  }
  [BUILD]() {
    return this._from.from ? {
      type: this.type,
      fast: true,
      from: this._from.from
    } : {
      type: this.type,
      fast: true
    };
  }
};
var BoolFieldBuilder = class _BoolFieldBuilder {
  static {
    __name(this, "_BoolFieldBuilder");
  }
  _fast;
  _from;
  constructor(fast = { fast: false }, from = { from: null }) {
    this._fast = fast;
    this._from = from;
  }
  fast() {
    return new _BoolFieldBuilder({ fast: true }, this._from);
  }
  from(field) {
    return new _BoolFieldBuilder(this._fast, { from: field });
  }
  [BUILD]() {
    const hasFast = this._fast.fast;
    const hasFrom = Boolean(this._from.from);
    if (hasFast && hasFrom) {
      return {
        type: "BOOL",
        fast: true,
        from: this._from.from
      };
    }
    if (hasFast) {
      return {
        type: "BOOL",
        fast: true
      };
    }
    if (hasFrom) {
      return {
        type: "BOOL",
        from: this._from.from
      };
    }
    return { type: "BOOL" };
  }
};
var DateFieldBuilder = class _DateFieldBuilder {
  static {
    __name(this, "_DateFieldBuilder");
  }
  _fast;
  _from;
  constructor(fast = { fast: false }, from = { from: null }) {
    this._fast = fast;
    this._from = from;
  }
  fast() {
    return new _DateFieldBuilder({ fast: true }, this._from);
  }
  from(field) {
    return new _DateFieldBuilder(this._fast, { from: field });
  }
  [BUILD]() {
    const hasFast = this._fast.fast;
    const hasFrom = Boolean(this._from.from);
    if (hasFast && hasFrom) {
      return {
        type: "DATE",
        fast: true,
        from: this._from.from
      };
    }
    if (hasFast) {
      return {
        type: "DATE",
        fast: true
      };
    }
    if (hasFrom) {
      return {
        type: "DATE",
        from: this._from.from
      };
    }
    return { type: "DATE" };
  }
};
var KeywordFieldBuilder = class {
  static {
    __name(this, "KeywordFieldBuilder");
  }
  [BUILD]() {
    return { type: "KEYWORD" };
  }
};
var FacetFieldBuilder = class {
  static {
    __name(this, "FacetFieldBuilder");
  }
  [BUILD]() {
    return { type: "FACET" };
  }
};
if (typeof atob === "undefined") {
  global.atob = (b64) => Buffer.from(b64, "base64").toString("utf8");
}
var Redis2 = class _Redis extends Redis {
  static {
    __name(this, "_Redis");
  }
  /**
   * Create a new redis client by providing a custom `Requester` implementation
   *
   * @example
   * ```ts
   *
   * import { UpstashRequest, Requester, UpstashResponse, Redis } from "@upstash/redis"
   *
   *  const requester: Requester = {
   *    request: <TResult>(req: UpstashRequest): Promise<UpstashResponse<TResult>> => {
   *      // ...
   *    }
   *  }
   *
   * const redis = new Redis(requester)
   * ```
   */
  constructor(configOrRequester) {
    if ("request" in configOrRequester) {
      super(configOrRequester);
      return;
    }
    if (!configOrRequester.url) {
      console.warn(
        `[Upstash Redis] The 'url' property is missing or undefined in your Redis config.`
      );
    } else if (configOrRequester.url.startsWith(" ") || configOrRequester.url.endsWith(" ") || /\r|\n/.test(configOrRequester.url)) {
      console.warn(
        "[Upstash Redis] The redis url contains whitespace or newline, which can cause errors!"
      );
    }
    if (!configOrRequester.token) {
      console.warn(
        `[Upstash Redis] The 'token' property is missing or undefined in your Redis config.`
      );
    } else if (configOrRequester.token.startsWith(" ") || configOrRequester.token.endsWith(" ") || /\r|\n/.test(configOrRequester.token)) {
      console.warn(
        "[Upstash Redis] The redis token contains whitespace or newline, which can cause errors!"
      );
    }
    const client = new HttpClient({
      baseUrl: configOrRequester.url,
      retry: configOrRequester.retry,
      headers: { authorization: `Bearer ${configOrRequester.token}` },
      agent: configOrRequester.agent,
      responseEncoding: configOrRequester.responseEncoding,
      cache: configOrRequester.cache ?? "no-store",
      signal: configOrRequester.signal,
      keepAlive: configOrRequester.keepAlive,
      readYourWrites: configOrRequester.readYourWrites
    });
    const safeEnv = typeof process === "object" && process && typeof process.env === "object" && process.env ? process.env : {};
    super(client, {
      automaticDeserialization: configOrRequester.automaticDeserialization,
      enableTelemetry: configOrRequester.enableTelemetry ?? !safeEnv.UPSTASH_DISABLE_TELEMETRY,
      latencyLogging: configOrRequester.latencyLogging,
      enableAutoPipelining: configOrRequester.enableAutoPipelining
    });
    const nodeVersion = typeof process === "object" && process ? process.version : void 0;
    this.addTelemetry({
      runtime: (
        // @ts-expect-error to silence compiler
        typeof EdgeRuntime === "string" ? "edge-light" : nodeVersion ? `node@${nodeVersion}` : "unknown"
      ),
      platform: safeEnv.UPSTASH_CONSOLE ? "console" : safeEnv.VERCEL ? "vercel" : safeEnv.AWS_REGION ? "aws" : "unknown",
      sdk: `@upstash/redis@${VERSION}`
    });
    if (this.enableAutoPipelining) {
      return this.autoPipeline();
    }
  }
  /**
   * Create a new Upstash Redis instance from environment variables.
   *
   * Use this to automatically load connection secrets from your environment
   * variables. For instance when using the Vercel integration.
   *
   * This tries to load connection details from your environment using `process.env`:
   * - URL: `UPSTASH_REDIS_REST_URL` or fallback to `KV_REST_API_URL`
   * - Token: `UPSTASH_REDIS_REST_TOKEN` or fallback to `KV_REST_API_TOKEN`
   *
   * The fallback variables provide compatibility with Vercel KV and other platforms
   * that may use different naming conventions.
   */
  static fromEnv(config2) {
    if (typeof process !== "object" || !process || typeof process.env !== "object" || !process.env) {
      throw new TypeError(
        '[Upstash Redis] Unable to get environment variables, `process.env` is undefined. If you are deploying to cloudflare, please import from "@upstash/redis/cloudflare" instead'
      );
    }
    const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
    if (!url) {
      console.warn("[Upstash Redis] Unable to find environment variable: `UPSTASH_REDIS_REST_URL`");
    }
    const token = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;
    if (!token) {
      console.warn(
        "[Upstash Redis] Unable to find environment variable: `UPSTASH_REDIS_REST_TOKEN`"
      );
    }
    return new _Redis({ ...config2, url, token });
  }
};

// src/configs/connectredis.ts
var redis;
function initializeRedis(env2) {
  if (!redis) {
    redis = new Redis2({
      url: env2.UPSTASH_REDIS_REST_URL || "",
      token: env2.UPSTASH_REDIS_REST_TOKEN || ""
    });
  }
  return redis;
}
__name(initializeRedis, "initializeRedis");

// src/utils/cacheKeyHasher.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
import crypto from "node:crypto";
function cachekeyhash(input) {
  return crypto.createHash("md5").update(input).digest("hex");
}
__name(cachekeyhash, "cachekeyhash");

// src/services/emit-request-log.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var STREAM_KEY = "gateway:request-logs";
async function emitRequestLog(log3) {
  try {
    await redis.xadd(
      STREAM_KEY,
      "*",
      {
        projectId: log3.projectId,
        keyId: log3.keyId,
        route: log3.route,
        method: log3.method,
        statusCode: String(log3.statusCode),
        user_api_latency: String(log3.user_api_latency),
        cached: log3.cached ? "true" : "false",
        latency: String(log3.latency),
        origin: log3.origin ?? "null",
        timestamp: String(log3.timestamp)
      }
    );
  } catch {
  }
}
__name(emitRequestLog, "emitRequestLog");

// src/utils/redisRatelimit.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
async function rateLimit(redis2, identifier, limit, windowSeconds) {
  const key = `ratelimit:${identifier}`;
  try {
    const pipeline = redis2.pipeline();
    pipeline.incr(key);
    pipeline.ttl(key);
    const [current, ttl] = await pipeline.exec();
    if (current === 1 || ttl === -1) {
      await redis2.expire(key, windowSeconds);
    }
    if (current > limit) {
      return {
        allowed: false,
        remaining: 0,
        retryAfter: ttl > 0 ? ttl : windowSeconds
      };
    }
    return {
      allowed: true,
      remaining: Math.max(limit - current, 0),
      retryAfter: ttl > 0 ? ttl : windowSeconds
    };
  } catch (err) {
    return {
      allowed: true,
      remaining: limit,
      retryAfter: 0
    };
  }
}
__name(rateLimit, "rateLimit");

// src/router.ts
var proxyrouter = new Hono2();
proxyrouter.all("/:projectId/*", async (c) => {
  const requestStart = Date.now();
  const projectId = c.req.param("projectId");
  const method = c.req.method.toUpperCase();
  const apiKey = c.req.header("x-safeapi-key") ?? "";
  const origin = c.req.header("origin") ?? "null";
  const fullUrl = new URL(c.req.url);
  const pathOnly = fullUrl.pathname.replace(`/${projectId}`, "");
  const normalizedQuery = c.req.query();
  const queryString = toSortedQueryString(normalizedQuery);
  try {
    if (!hasProjectConfig(projectId)) {
      return c.json({ message: "Gateway warming up" }, 503);
    }
    const project = getProjectConfig(projectId);
    if (!project) {
      return c.json({ error: "Project not found" }, 404);
    }
    if (project.status === "suspended") {
      return c.json({ message: "API suspended" }, 503);
    }
    if (origin && origin !== "null" && project.allowedOrigins.length > 0 && !project.allowedOrigins.includes(origin)) {
      return c.json({ message: "This Origin was not allowed" }, 403);
    }
    const apiKeyHash = cachekeyhash(apiKey);
    const key = project.apiKeys.find((k) => k.key === apiKey && k.active);
    if (!key) {
      return c.json({ message: "Invalid API key" }, 403);
    }
    let matchedRoute = null;
    for (const r of project.routes) {
      if (r.method === method && matchRoute(r.path, pathOnly).matched) {
        matchedRoute = r;
        break;
      }
    }
    if (!matchedRoute) {
      return c.json({ message: "Invalid route" }, 404);
    }
    const rl = await rateLimit(
      redis,
      `${projectId}:${apiKeyHash}`,
      project.rateLimit,
      60
    );
    if (!rl.allowed) {
      return c.json({
        message: "Rate limit exceeded",
        retryAfter: rl.retryAfter
      }, 429);
    }
    const targetUrl = `${project.originUrl}${pathOnly}${queryString}`;
    const parsed = new URL(targetUrl);
    if (parsed.protocol !== "https:") {
      return c.json({ error: "Only HTTPS targets allowed" }, 400);
    }
    const cacheKey = cachekeyhash(`${method} ${targetUrl}`);
    const cacheStart = Date.now();
    const cachedValue = await redis.get(cacheKey);
    if (cachedValue) {
      const payload = typeof cachedValue === "string" ? JSON.parse(cachedValue) : cachedValue;
      const cacheEnd = Date.now();
      for (const [key2, val] of Object.entries(payload.headers)) {
        if (typeof val === "string") {
          c.header(key2, val);
        }
      }
      emitRequestLog({
        projectId,
        keyId: key.keyId,
        route: matchedRoute.path,
        method,
        statusCode: payload.status,
        user_api_latency: cacheEnd - cacheStart,
        cached: true,
        latency: cacheEnd - requestStart,
        origin,
        timestamp: Date.now()
      });
      return c.body(payload.data, payload.status);
    }
    const upstreamStart = Date.now();
    console.log(`Proxying request to: ${targetUrl}`);
    const {
      host,
      connection,
      "content-length": contentLength,
      "transfer-encoding": transferEncoding,
      "accept-encoding": acceptEncoding,
      expect,
      ...forwardHeaders
    } = c.req.header();
    const options = {
      method,
      headers: {
        ...forwardHeaders,
        host: parsed.hostname
      },
      signal: AbortSignal.timeout(1e4)
    };
    if (method !== "GET") {
      try {
        const bodyContent = await c.req.arrayBuffer();
        if (bodyContent && bodyContent.byteLength > 0) {
          options.body = bodyContent;
        }
      } catch (e) {
      }
    }
    const response = await fetch(targetUrl, options);
    const upstreamEnd = Date.now();
    response.headers.forEach((val, key2) => {
      c.header(key2, val);
    });
    const data = await response.arrayBuffer();
    emitRequestLog({
      projectId,
      keyId: key.keyId,
      route: matchedRoute.path,
      method,
      statusCode: response.status,
      user_api_latency: upstreamEnd - upstreamStart,
      cached: false,
      latency: upstreamEnd - requestStart,
      origin,
      timestamp: Date.now()
    });
    if (matchedRoute.cacheEnabled && response.status >= 200 && response.status < 300) {
      const decoder = new TextDecoder();
      const stringData = decoder.decode(data);
      const headersObj = {};
      response.headers.forEach((v, k) => {
        headersObj[k] = v;
      });
      await redis.set(
        cacheKey,
        JSON.stringify({
          status: response.status,
          headers: headersObj,
          data: stringData
        }),
        { ex: matchedRoute.cacheTTL }
      );
    }
    return c.body(data, response.status);
  } catch (err) {
    console.error("Gateway error:", err.message);
    return c.json({ error: "Bad Gateway", message: err.message }, 502);
  }
});

// src/configs/loadGatewayConfig.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var import_node_color_log = __toESM(require_node_color_log());
var CONFIG_ENDPOINT = "/internal/gateway/config";
var lastLoaded = 0;
var REFRESH_INTERVAL = 3e4;
async function loadGatewayConfig(env2) {
  if (Date.now() - lastLoaded < REFRESH_INTERVAL && getLoadedProjectIds().length > 0) {
    return;
  }
  const ADMIN_BASE_URL = env2.ADMIN_BASE_URL;
  const INTERNAL_ADMIN_SECRET = env2.INTERNAL_ADMIN_SECRET;
  if (!ADMIN_BASE_URL) {
    import_node_color_log.default.color("red").log("ADMIN_BASE_URL not set in env");
    return;
  }
  try {
    const res = await fetch(`${ADMIN_BASE_URL}${CONFIG_ENDPOINT}`, {
      signal: AbortSignal.timeout(5e3),
      headers: {
        "Internal-Admin-Secret": INTERNAL_ADMIN_SECRET || ""
      }
    });
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }
    const data = await res.json();
    const projects = data.projects;
    if (!Array.isArray(projects)) {
      throw new Error("Invalid gateway config payload");
    }
    clearGatewayConfig();
    for (const project of projects) {
      setProjectConfig({
        ...project,
        updatedAt: Date.now()
      });
    }
    lastLoaded = Date.now();
    import_node_color_log.default.color("green").log(`\u{1F504} Gateway config loaded (${projects.length} projects)`);
  } catch (err) {
    import_node_color_log.default.color("red").log("Failed to load gateway config: " + err.message);
  }
}
__name(loadGatewayConfig, "loadGatewayConfig");

// src/healthRouter.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var healthRouter = new Hono2();
healthRouter.get("/", async (c) => {
  const ProjectConfisLoaded = getLoadedProjectIds().length > 0;
  let redisAlive = false;
  try {
    await redis.ping();
    redisAlive = true;
  } catch (err) {
    console.error("Redis ping failed:", err);
  }
  if (redisAlive && ProjectConfisLoaded) {
    return c.json({
      status: "ok",
      message: "Service is healthy",
      loadedProjectConfigs: getLoadedProjectIds().length,
      redisStatus: "connected"
    }, 200);
  } else {
    return c.json({
      status: "error",
      message: "Service is unhealthy",
      loadedProjectConfigs: getLoadedProjectIds().length,
      redisStatus: redisAlive ? "connected" : "disconnected"
    }, 503);
  }
});

// src/index.ts
var app = new Hono2();
app.use("*", cors());
app.use("*", async (c, next) => {
  initializeRedis(c.env);
  await loadGatewayConfig(c.env);
  await next();
});
app.route("/_health", healthRouter);
app.route("/", proxyrouter);
var src_default = app;

// node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var drainBody = /* @__PURE__ */ __name(async (request, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env2);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env2);
  } catch (e) {
    const error3 = reduceError(e);
    return Response.json(error3, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-GThiKV/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = src_default;

// node_modules/wrangler/templates/middleware/common.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env2, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env2, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env2, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env2, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-GThiKV/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env2, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env2, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env2, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env2, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env2, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env2, ctx) => {
      this.env = env2;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
//# sourceMappingURL=index.js.map
