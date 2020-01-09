import products from "./bill";

const service = {
  getCvmList(
    param = {
      SubProductCode: "",
      cpu: "",
      memory: ""
    }
  ) {
    const { SubProductCode } = param;
    const cpu = Number(param.cpu);
    const memory = Number(param.memory);
    let cvmList = products.cvm;
    let result = [];
    // let cpuMap = {};
    // let memoryMap = {};

    // 按照筛选条件过滤
    for (let i = 0; i < cvmList.length; i++) {
      let isRequest = true;
      let c = cvmList[i];
      if (cpu && cpu !== c.CPU) {
        isRequest = false;
      }
      if (memory && memory !== c.RAMInGB) {
        isRequest = false;
      }
      if (SubProductCode && SubProductCode !== c.SubProductCode) {
        isRequest = false;
      }
      if (isRequest) {
        result.push(c);
      }
    }

    return Promise.resolve(result);
  },
  getCbsList(
    param = {
      SubProductCode: ""
    }
  ) {
    let cbsList = products.cbs;
    let result = [];

    const { SubProductCode } = param;

    cbsList.forEach(c => {
      let isRequest = true;
      if (SubProductCode && SubProductCode !== c.SubProductCode) {
        isRequest = false;
      }

      if (isRequest) {
        result.push(c);
      }
    });
    return Promise.resolve(result);
  },
  getTdsqlList() {
    let list = products.tdsql;

    return Promise.resolve(list);
  },
  getDcdblList() {
    let list = products.dcdb;

    return Promise.resolve(list);
  },
  getMongodblList() {
    return Promise.resolve(products.mongodb);
  },
  getIpList() {
    const ipList = products.eip;
    return Promise.resolve(ipList);
  }
};

export default service;
