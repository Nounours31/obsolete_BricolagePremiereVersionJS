'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-23 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-2010';
    this._commitGIT = '132bf6f94468b174ddbada8d3a406684004374a2';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}