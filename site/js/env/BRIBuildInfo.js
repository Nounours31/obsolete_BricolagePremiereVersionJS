'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-12 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1963';
    this._commitGIT = '57bd4fabd6d7c82ba8585abf0a7cbc5349d31623';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}