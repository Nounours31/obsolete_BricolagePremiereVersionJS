'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-06 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1207';
    this._commitGIT = '881bda5a4d4ca91c2bf07a5f01efb808347e3b43';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}