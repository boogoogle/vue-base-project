<template>
  <div class="home">
    <div class="header-bg">
      <div class="area-1200 area__main">
        <top-menu></top-menu>
        <topSlanger
          title="服务永辉业务创新"
          subTitle="提供应用软件研发和可靠运行所需服务，满足业务扩展需求，沉淀技术资产，规范管理和使用，减少重复建设"
        >
          <template v-slot:slangerImg>
            <img src="../../assets/home/home-banner_right@2x.png" />
          </template>
        </topSlanger>
      </div>
    </div>
    <div class="new-production home-section-common">
      <div class="area__main area-1200">
        <div class="np_t c-333">
          <div>新品发布</div>
          <span class="np__spot dib"></span>
        </div>
        <div class="productions">
          <div class="prod">
            <div class="prod__icon">
              <img
                class="p_bg"
                src="../../assets/home/new_production_item_bg@2x.png"
                alt=""
              />
              <img
                class="p_vm"
                src="../../assets/home/icon-vmware-home@2x.png"
                alt=""
              />
            </div>
            <div class="prod__name">VMware 型云服务器</div>
            <div class="prod__t f16 mb-20">
              采用 vSphere 虚拟化平台，提供对历史应用的最大兼容性
            </div>
            <div class="prod__price">¥ 200 <span class="f12">/G/天</span></div>
            <router-link to="/production/host" class="prod__dt">
              查看详情<span class="icon-arrow-right-blue"></span>
            </router-link>
          </div>
          <div class="prod">
            <div class="prod__icon">
              <img
                class="p_bg"
                src="../../assets/home/new_production_item_bg@2x.png"
                alt=""
              />
              <img
                class="p_vm"
                src="../../assets/home/icon-storage-home@2x.png"
                alt=""
              />
            </div>
            <div class="prod__name">高可用块存储</div>
            <div class="prod__t f16 mb-20">
              兼顾性能和可用性，专为核心应用打造
            </div>
            <div class="prod__price">¥ 200<span class="f12">/G/天</span></div>
            <router-link to="/production/disk" class="prod__dt">
              查看详情<span class="icon-arrow-right-blue"></span>
            </router-link>
          </div>
          <div class="prod">
            <div class="prod__icon">
              <img
                class="p_bg"
                src="../../assets/home/new_production_item_bg@2x.png"
                alt=""
              />
              <img
                class="p_vm"
                src="../../assets/home/icon-database-home@2x.png"
                alt=""
              />
            </div>
            <div class="prod__name">CRedis 数据库</div>
            <div class="prod__t f16 mb-20">
              高性能、低延迟、可伸缩的 Redis数据库
            </div>
            <div class="prod__price">¥ 200<span class="f12">/G/天</span></div>
            <router-link to="/production/redis" class="prod__dt">
              查看详情<span class="icon-arrow-right-blue"></span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="recommend-production home-section-common">
      <div class="area__main area-1200">
        <div class="np_t c-333">
          <div>精选产品</div>
          <span class="np__spot dib"></span>
        </div>
        <div class="productions">
          <div class="prod border-right-1">
            <div class="prod__banner">
              <img
                class="p_img"
                src="../../assets/home/icon-vmware-home@2x.png"
                alt=""
              />
              <div class="p--sum">
                <p class="p_name">云服务器</p>
                <p class="f20">¥ 1688 <span class="f12">/月起</span></p>
                <div>
                  <span class="p_label mr-15">必需之选</span>
                  <span class="p_label">性能保障</span>
                </div>
              </div>
            </div>
            <div class="prod__intro">
              <div class="pb-30 intro-1">
                <div class="intro--t">
                  产品优势
                </div>
                <div class="intro--content">
                  <p class="pb-10 lh-20">
                    <span class="dot"></span>快速增删，满足业务弹性需求
                  </p>
                  <p class="pb-10">
                    <span class="dot"></span>多种类型实例、操作系统，灵活调整
                  </p>
                  <p class="pb-10">
                    <span class="dot"></span>快速增删，满足业务弹性需求
                  </p>
                  <p><span class="dot"></span>快速增删，满足业务弹性需求</p>
                </div>
              </div>
              <div class="intro-2">
                <div class="intro--t">
                  适用场景
                </div>
                <div class="flex">
                  <p class="intro__label">
                    <span class="icon-green-check mr-8"></span> 通用计算
                  </p>
                  <p class="intro__label">
                    <span class="icon-green-check mr-8"></span> Web网站
                  </p>
                </div>
              </div>
              <div class="intro-3">
                <a
                  class="now"
                  href="http://dev.tce.cloud.yonghui.cn/ycloud-buy"
                >
                  <el-button size="small" type="primary"> 立即购买</el-button>
                </a>
              </div>
            </div>
          </div>
          <div class="prod border-right-1">
            <div class="prod__banner">
              <img
                class="p_img"
                src="../../assets/home/icon-vmware-home@2x.png"
                alt=""
              />
              <div class="p--sum">
                <p class="p_name">云服务器</p>
                <p class="f20">¥ 1688 <span class="f12">/月起</span></p>
                <div>
                  <span class="p_label mr-15">必需之选</span>
                  <span class="p_label">性能保障</span>
                </div>
              </div>
            </div>
            <div class="prod__intro">
              <div class="pb-30 intro-1">
                <div class="intro--t">
                  产品优势
                </div>
                <div class="intro--content">
                  <p class="pb-10 lh-20">
                    <span class="dot"></span>快速增删，满足业务弹性需求
                  </p>
                  <p class="pb-10">
                    <span class="dot"></span>多种类型实例、操作系统，灵活调整
                  </p>
                  <p class="pb-10">
                    <span class="dot"></span>快速增删，满足业务弹性需求
                  </p>
                  <p><span class="dot"></span>快速增删，满足业务弹性需求</p>
                </div>
              </div>
              <div class="intro-2">
                <div class="intro--t">
                  适用场景
                </div>
                <div class="flex">
                  <p class="intro__label">
                    <span class="icon-green-check mr-8"></span> 通用计算
                  </p>
                  <p class="intro__label">
                    <span class="icon-green-check mr-8"></span> Web网站
                  </p>
                </div>
              </div>
              <div class="intro-3">
                <a
                  class="now"
                  href="http://dev.tce.cloud.yonghui.cn/ycloud-buy"
                >
                  <el-button size="small" type="primary"> 立即购买</el-button>
                </a>
              </div>
            </div>
          </div>
          <div class="prod">
            <div class="prod__banner">
              <img
                class="p_img"
                src="../../assets/home/icon-vmware-home@2x.png"
                alt=""
              />
              <div class="p--sum">
                <p class="p_name">云服务器</p>
                <p class="f20">¥ 1688 <span class="f12">/月起</span></p>
                <div>
                  <span class="p_label mr-15">必需之选</span>
                  <span class="p_label">性能保障</span>
                </div>
              </div>
            </div>
            <div class="prod__intro">
              <div class="pb-30 intro-1">
                <div class="intro--t">
                  产品优势
                </div>
                <div class="intro--content">
                  <p class="pb-10 lh-20">
                    <span class="dot"></span>快速增删，满足业务弹性需求
                  </p>
                  <p class="pb-10">
                    <span class="dot"></span>多种类型实例、操作系统，灵活调整
                  </p>
                  <p class="pb-10">
                    <span class="dot"></span>快速增删，满足业务弹性需求
                  </p>
                  <p><span class="dot"></span>快速增删，满足业务弹性需求</p>
                </div>
              </div>
              <div class="intro-2">
                <div class="intro--t">
                  适用场景
                </div>
                <div class="flex">
                  <p class="intro__label">
                    <span class="icon-green-check mr-8"></span> 通用计算
                  </p>
                  <p class="intro__label">
                    <span class="icon-green-check mr-8"></span> Web网站
                  </p>
                </div>
              </div>
              <div class="intro-3">
                <a
                  class="now"
                  href="http://dev.tce.cloud.yonghui.cn/ycloud-buy"
                >
                  <el-button size="small" type="primary"> 立即购买</el-button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cloud-solution home-section-common">
      <div class="area__main area-1200">
        <div class="np_t c-333">
          <div>上云方案</div>
          <span class="np__spot dib"></span>
        </div>
        <div class="solutions card">
          <div class="menu">
            <div
              class="menu__item pointer"
              :class="{ selected: selectedSolutionId === mIdx }"
              @mouseover="changeSolution(mIdx)"
              v-for="(menu, mIdx) in solutionMenu"
              :key="mIdx"
            >
              {{ menu.name }}
            </div>
          </div>
          <div class="card--content">
            <div class="ct ct_1" v-if="selectedSolutionId === 0">
              <div class="mask"></div>
              <div class="isolute">
                <div class="ct__title">永辉云官网</div>
                <div class="ct__intro ">
                  企业的官方网站是互联网时代企业品牌宣传和信息发布的重要窗口。制作精美、内容丰富、更新及时的站点能够强化宣传效果和良好直观印象。通过利用合适的云资源优化网站架构，结合云服务的弹性伸缩能力，能够打造一流的官网使用体验。
                </div>
                <div class="bd--uses">
                  <router-link class="use-c" to="/production/host">
                    <div class="c__icon">
                      <i class="icon-vm" />
                      <span class="sticker"></span>
                    </div>
                    <div class="c__txt">
                      云服务器
                    </div>
                  </router-link>
                  <router-link class="use-c" to="/production/object-storage">
                    <div class="c__icon">
                      <i class="icon-object-storage" />
                      <span class="sticker"></span>
                    </div>
                    <div class="c__txt">
                      对象存储
                    </div>
                  </router-link>
                  <router-link class="use-c" to="/production/distributed-db">
                    <div class="c__icon">
                      <i class="icon-distributed-db" />
                      <span class="sticker"></span>
                    </div>
                    <div class="c__txt">
                      分布式数据库
                    </div>
                  </router-link>
                  <router-link class="use-c" to="/production/load-balance">
                    <div class="c__icon">
                      <i class="icon-loadbalance" />
                      <span class="sticker"></span>
                    </div>
                    <div class="c__txt">
                      负载均衡
                    </div>
                  </router-link>
                </div>
                <router-link to="/production" class="more"
                  >更多网站项目 ></router-link
                >
              </div>
            </div>
            <div class="ct ct_2" v-if="selectedSolutionId === 1">
              <div class="mask"></div>
              <div class="isolute">
                <div class="ct__title">永辉买菜APP</div>
                <div class="ct__intro ">
                  永辉买菜APP是永辉新零售品质商品和全新消费体验的线上服务平台，为消费者提供安全健康的新鲜食材和品质商品，创造线上线下一体化的惊喜消费体验。永辉云为永辉买菜App提供了弹性伸缩的云资源，赋能业务的推广大促，助力业务高速成长。
                </div>
                <div class="bd--uses">
                  <router-link class="use-c" to="/production/host">
                    <div class="c__icon">
                      <i class="icon-vm" />
                      <span class="sticker"></span>
                    </div>
                    <div class="c__txt">
                      云服务器
                    </div>
                  </router-link>
                  <router-link class="use-c" to="/production/container">
                    <div class="c__icon">
                      <i class="icon-container" />
                      <span class="sticker"></span>
                    </div>
                    <div class="c__txt">
                      容器服务
                    </div>
                  </router-link>
                  <router-link class="use-c" to="/production/object-storage">
                    <div class="c__icon">
                      <i class="icon-object-storage" />
                      <span class="sticker"></span>
                    </div>
                    <div class="c__txt">
                      对象存储
                    </div>
                  </router-link>
                  <router-link class="use-c" to="/production/distributed-db">
                    <div class="c__icon">
                      <i class="icon-distributed-db" />
                      <span class="sticker"></span>
                    </div>
                    <div class="c__txt">
                      分布式数据库
                    </div>
                  </router-link>
                </div>
                <router-link to="/production" class="more"
                  >更多网站项目 ></router-link
                >
              </div>
            </div>
            <div class="ct ct_3" v-if="selectedSolutionId === 2">
              <div class="mask"></div>
              <div class="isolute">
                <div class="ct__title">永辉金融</div>
                <div class="ct__intro ">
                  基于永辉超市强大的产业背景，永辉金融立足产业，服务小微，致力于解决国内流通产业中零售业供应链上合作伙伴在发展过程中的金融服务需求，以融促产。
                </div>
                <div class="bd--uses">
                  <router-link class="use-c" to="/production/vpc">
                    <div class="c__icon">
                      <i class="icon-private-net" />
                      <span class="sticker"></span>
                    </div>
                    <div class="c__txt">
                      私有网络
                    </div>
                  </router-link>
                  <router-link class="use-c" to="/production/host">
                    <div class="c__icon">
                      <i class="icon-vm" />
                      <span class="sticker"></span>
                    </div>
                    <div class="c__txt">
                      云服务器
                    </div>
                  </router-link>
                </div>
                <router-link to="/production" class="more"
                  >更多网站项目 ></router-link
                >
              </div>
            </div>
            <div class="ct ct_4" v-if="selectedSolutionId === 3">
              <div class="mask"></div>
              <div class="isolute">
                <div class="ct__title">1233 S2B网站</div>
                <div class="ct__intro ">
                  1233
                  S2B国际消费品供应链服务平台，致力于打造成国际领先的服务国内外贸易企业“买全球，卖全球”的综合性供应链服务平台，实现立足福建，辐射全国，链接全球233个经济体。1233平台采用永辉云的
                </div>
                <div class="bd--uses">
                  <router-link class="use-c" to="/production/host">
                    <div class="c__icon">
                      <i class="icon-vm" />
                      <span class="sticker"></span>
                    </div>
                    <div class="c__txt">
                      云服务器
                    </div>
                  </router-link>
                  <router-link class="use-c" to="/production/object-storage">
                    <div class="c__icon">
                      <i class="icon-object-storage" />
                      <span class="sticker"></span>
                    </div>
                    <div class="c__txt">
                      对象存储
                    </div>
                  </router-link>
                  <router-link class="use-c" to="/production/distributed-db">
                    <div class="c__icon">
                      <i class="icon-distributed-db" />
                      <span class="sticker"></span>
                    </div>
                    <div class="c__txt">
                      分布式数据库
                    </div>
                  </router-link>
                  <router-link class="use-c" to="/production/vpc">
                    <div class="c__icon">
                      <i class="icon-private-net" />
                      <span class="sticker"></span>
                    </div>
                    <div class="c__txt">
                      私有网络
                    </div>
                  </router-link>
                </div>
                <router-link to="/production" class="more"
                  >更多网站项目 ></router-link
                >
              </div>
            </div>
            <div class="ct ct_5" v-if="selectedSolutionId === 4">
              <div class="mask"></div>
              <div class="isolute">
                <div class="ct__title">AI 平台</div>
                <div class="ct__intro ">
                  大数据分析和深度学习挖掘。
                </div>
                <div class="bd--uses">
                  <router-link class="use-c" to="/production/object-storage">
                    <div class="c__icon">
                      <i class="icon-object-storage" />
                      <span class="sticker"></span>
                    </div>
                    <div class="c__txt">
                      对象存储
                    </div>
                  </router-link>
                  <router-link class="use-c" to="/production/metal-host">
                    <div class="c__icon">
                      <i class="icon-metal-host" />
                      <span class="sticker"></span>
                    </div>
                    <div class="c__txt">
                      裸金属服务器
                    </div>
                  </router-link>
                </div>
                <router-link to="/production" class="more"
                  >更多网站项目 ></router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <yh-footer />
  </div>
</template>

<script>
import "./home.scss";
import topMenu from "@/components/top-menu";
import topSlanger from "@/components/top-slanger";
import yhFooter from "@/components/footer";
export default {
  name: "home",
  components: {
    topMenu,
    topSlanger,
    yhFooter
  },
  data() {
    return {
      solutionMenu: [
        { name: "网站" },
        { name: "移动应用" },
        { name: "金融" },
        { name: "电商" },
        { name: "数据智能" }
      ],
      selectedSolutionId: 0,
      buyLink: "dev.tce.cloud.yonghui.cn/ycloud-buy"
    };
  },
  methods: {
    changeSolution(i) {
      this.selectedSolutionId = i;
    }
  }
};
</script>
