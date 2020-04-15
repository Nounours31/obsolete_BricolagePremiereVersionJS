'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-15 08:00:04';
    this._versionBuild = 'jenkins-Bricolage-1243';
    this._commitGIT = '4715a2e7748d779333587e3fe57549d03c49f7f7';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}