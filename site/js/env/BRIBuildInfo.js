'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-12 11:28:06';
    this._versionBuild = 'jenkins-Bricolage-107';
    this._commitGIT = 'f67d2ea4255b67860f411465e7cda71ddd7fd440';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}