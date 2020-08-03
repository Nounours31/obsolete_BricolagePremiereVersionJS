'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-03 20:00:08';
    this._versionBuild = 'jenkins-Bricolage-1686';
    this._commitGIT = '4e112dcdbd994b4eafb398c2ae24133bf3cd5501';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}