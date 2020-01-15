'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-15 08:00:08';
    this._versionBuild = 'jenkins-Bricolage-879';
    this._commitGIT = 'bb28d074bcf48da22e9cdfc2b135cc763a47f515';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}