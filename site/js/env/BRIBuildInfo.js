'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-21 16:00:13';
    this._versionBuild = 'jenkins-Bricolage-1881';
    this._commitGIT = '5a38ee310770f38fdbdda62ed4fadbb33ca91950';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}