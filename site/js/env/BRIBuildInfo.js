'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-29 12:00:15';
    this._versionBuild = 'jenkins-Bricolage-200';
    this._commitGIT = '61496bcd8cadcc5ea8b4b39cdad55456a6c802a0';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}