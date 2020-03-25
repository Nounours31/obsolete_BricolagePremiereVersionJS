'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-25 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-1161';
    this._commitGIT = 'de9291c9ea45a90b479acb80f71b74c1e29a78da';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}