'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-31 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-1429';
    this._commitGIT = 'b68dd4587d4e88635f7080a353a83429030568fc';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}