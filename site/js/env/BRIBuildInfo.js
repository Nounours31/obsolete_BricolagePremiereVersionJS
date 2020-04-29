'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-29 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1299';
    this._commitGIT = '4dd401bf0e8d4a1b15e90c774501a7987a502792';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}