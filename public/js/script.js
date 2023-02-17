import Navegador from "./components/Navegador.js";
import router from "./router/router.js";



const { createApp } = Vue

const app = createApp({
    data: () => ({
        titulo: "Onload Sistemas"

    }),
    components: {
        Navegador,
     }
})

app.use(router)
app.mount("#app")




