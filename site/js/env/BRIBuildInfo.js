'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-15 08:00:11';
    this._versionBuild = 'jenkins-Bricolage-143';
    this._commitGIT = '7729a96df691a05b1ce13c8deac6b5c34e4a98af';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}