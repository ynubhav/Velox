import {ApiKeysPage} from "@/components/api-keys/page";

type Params = {
  projectId: string;
};

export default async function ApiKey(context: {
  params: Promise<Params>;
}) {
  const { projectId } = await context.params;
  console.log("Rendering API Keys Page for projectId:", projectId);
  return (
    <>
      <ApiKeysPage projectId={projectId} apiKeys={[]} />
    </>
  );
}
