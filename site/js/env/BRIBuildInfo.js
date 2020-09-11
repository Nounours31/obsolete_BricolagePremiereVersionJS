'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-11 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-1842';
    this._commitGIT = '322313e77b0ae23099df1085e934462ad8d3cd60';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}