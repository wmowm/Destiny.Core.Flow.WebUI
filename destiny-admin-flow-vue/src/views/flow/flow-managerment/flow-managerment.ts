import { Component, Vue, Emit, Mixins, Ref } from "vue-property-decorator";
import FlowStart from "@/components/flow-component/flow-start/flow-start.vue"
import antg6 from "@antv/g6"
@Component({
    name: "FlowManagerment",
    components: {
        FlowStart
    }
})
export default class FlowManagerment extends Mixins() {
    private visualcanvasdata = {
        nodes: [
            {
                id: '123456645616',
                type: 'circle',
                label: '开始节点',
                // img: 'https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg',
                x: 526,
                y: 215,
                size: 70,
                style: {
                    fill: '#9EC9FF',
                    lineWidth: 3,
                },
                labelCfg: {
                    style: {
                        fill: '#1890ff',
                        fontSize: 24,
                    },
                    position: 'center',
                },
                // configurations for four linkpoints
                linkPoints: {
                    top: false,
                    right: false,
                    bottom: false,
                    left: false,
                    // the diameter of the linkPoint
                    size: 10,
                    lineWidth: 1,
                    fill: '#fff',
                    stroke: '#1890FF',
                },
                // // icon configuration
                // icon: {
                //     // whether show the icon
                //     show: true,
                //     // icon's img address, string type
                //     img:
                //         'https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg',
                //     width: 60,
                //     height: 60,
                // },
            },
            {
                id: '1234566sdfasd45616',
                type: 'circle',
                label: '审批',
                // img: 'https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg',
                x: 150,
                y: 150,
                size: 70,
                style: {
                    fill: '#9EC9FF',
                    lineWidth: 3,
                },
                labelCfg: {
                    style: {
                        fill: '#1890ff',
                        fontSize: 24,
                    },
                    position: 'center',
                },
                // configurations for four linkpoints
                linkPoints: {
                    top: false,
                    right: false,
                    bottom: false,
                    left: false,
                    // the diameter of the linkPoint
                    size: 10,
                    lineWidth: 1,
                    fill: '#fff',
                    stroke: '#1890FF',
                },
                // // icon configuration
                // icon: {
                //     // whether show the icon
                //     show: true,
                //     // icon's img address, string type
                //     img:
                //         'https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg',
                //     width: 60,
                //     height: 60,
                // },
            }
        ],
        edges:[

        ],
    };

    private graph: any;


    private created() {

    }
    private mounted() {
        this.InitGraph()
    }
    public InitGraph() {
        const width = document.getElementById("visualcanvasparent")?.scrollWidth || 1200;
        const height = document.getElementById('visualcanvasparent')?.scrollHeight || 500;
        const grid = new antg6.Grid();
        //#region 
        /**
         * 自定是事件暂时有问题
         */
        // antg6.registerBehavior("click-add-edge", {
        //     getEvents() {
        //         debugger
        //         return {                    
        //             'node:click': 'onClick', // The event is canvas:click, the responsing function is onClick
        //             mousemove: 'onMousemove', // The event is mousemove, the responsing function is onMousemove
        //             'edge:click': 'onEdgeClick', // The event is edge:click, the responsing function is onEdgeClick
        //         };
        //     },
        //     //点击节点单击事件
        //     onClick(ev:any) {
        //         debugger
        //         const self = this;
        //         const node = ev.item;
        //         const graph:any = self.graph;
        //         // The position where the mouse clicks
        //         const point = { x: ev.x, y: ev.y };
        //         const model = node.getModel();
        //         if (self.addingEdge && self.edge) {
        //           graph.updateItem(self.edge, {
        //             target: model.id,
        //           });
        //           self.edge = null;
        //           self.addingEdge = false;
        //         } else {
        //           // Add anew edge, the end node is the current node user clicks
        //           self.edge = graph.addItem('edge', {
        //             source: model.id,
        //             target: model.id,
        //           });
        //           self.addingEdge = true;
        //         }
        //       },
        // })
        //#endregion
        /**
         * 定义工具栏
         */
        const toolbar = new antg6.ToolBar();
        /**
         * 缩略图
         */
        const minimap = new antg6.Minimap(
            {
                size: [100, 100],
            });
        this.graph = new antg6.Graph({
            container: 'visualcanvas',//绑定的容器div的id
            width: width,//宽
            height: height,//高
            plugins: [],//工具栏等一些工具引入
            fitCenter: false,//是否居中显示
            fitView: false,//元素是否自适应画布
            fitViewPadding: 20,//元素自适应画布时的四周留白像素值
            modes: {
                // 支持的 behavior
                default: ['drag-canvas', 'drag-node', 'zoom-canvas', 'click-select'],
            },
            defaultEdge: {
                type: 'quadratic',
                style: {
                    stroke: '#F6BD16',
                    lineWidth: 2
                },
            }
        });
        // console.log(this.graph);
        this.graph.data(this.visualcanvasdata);
        this.graph.render();
        this.graph.on('node:click', (evt: any) => {
            this.onNodeClick(evt)
        });
        // this.graph.on('node:mousedown', (evt: any) => {
        //     console.log(evt)
        // });




    }
    private onNodeClick(evt: any) {
        console.log(evt.item)
        console.log("asd1as1d32asd123as1d23as")
    }
    private addLine()
    {
        // this.graph.on('aftercreateedge', (e: any) => {
        //     const edges = this.graph.save().edges;
        //     antg6.Util.processParallelEdges(edges);
        //     this.graph.getEdges().forEach((edge:any, i:any) => {
        //         console.log(edges[i])
        //       this.graph.updateItem(edge, edges[i])
        //     })
        //   })
    }

}