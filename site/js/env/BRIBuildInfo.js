'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-21 16:00:08';
    this._versionBuild = 'jenkins-Bricolage-905';
    this._commitGIT = '02e0141a6a5588f5ab320cb1dfd501c7bef8f454';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}