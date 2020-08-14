'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-14 20:00:09';
    this._versionBuild = 'jenkins-Bricolage-1730';
    this._commitGIT = '2bb1c48db2dfbfc4793714b899026fcc0d304c77';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}