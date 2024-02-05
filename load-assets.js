export function getDir() {
  const stack = lively.stack();
  const thisCall = stack.getFrame(0);
  return new URL('./', thisCall.file).toString();
}

const dir = getDir();

await lively.loadCSSThroughDOM("font-awesome6", dir + "fonts/fontawesome-v6.1.1/css/fontawesome-v6.1.1-all.css");
// #TODO: wait for fonts to be actually loaded
