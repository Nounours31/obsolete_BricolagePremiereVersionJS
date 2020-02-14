'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-14 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-999';
    this._commitGIT = 'e269c62ee91eca5bbb2222e1035ed0e732d3ebcc';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}