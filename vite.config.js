import {defineConfig} from 'vite'
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
    plugins: [vue(),
        Components({
            imports: ['vue', 'vue-router'],
            resolvers: [ElementPlusResolver()]
        }),
        AutoImport({
            imports: ['vue', 'vue-router'],
            resolvers: [ElementPlusResolver()]
        })
    ],
    resolve: {
        // 配置路径别名
        alias: {
            // __dirname 是NodeJS的一个全局变量，它表示当前正在执行的模块所在的目录的绝对路径
            '@': resolve(__dirname, './src')
        }
    },
    server: {
        // 代理配置
        proxy: {
            // 设置已api开头的地址, 都转发至http://127.0.0.1:8000
            '/api': {
                target: 'http://127.0.0.1:8081',
                // 是否改写 origin，设置为 true 之后，就会把请求 API header 中的 origin，改成跟 target 里边的域名一样了
                changeOrigin: true
            }
        }
    }
})
