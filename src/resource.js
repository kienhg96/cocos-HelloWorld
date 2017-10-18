const res = {
    HelloWorld_png : "res/HelloWorld.png",
};

const g_resources = [];
for (let i in res) {
    g_resources.push(res[i]);
}

export { res };
export default g_resources;
