import { DefaultApi } from "./api";

const api = new DefaultApi();

api.getJobStatus({ jobid: "1" }).then((jobStatus) => {
  const resp = `Got \`${jobStatus}\` expected \`ok\``;
  console.log(resp);
  document.body.innerHTML = resp;
});
