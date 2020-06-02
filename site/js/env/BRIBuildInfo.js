'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-02 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-1438';
    this._commitGIT = '832f2bc3b019d1808c876cfa7c021da4d8e987dd';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}