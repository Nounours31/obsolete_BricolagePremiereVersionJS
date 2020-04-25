'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-25 16:00:04';
    this._versionBuild = 'jenkins-Bricolage-1285';
    this._commitGIT = '13e066fc4263101d08c09765fb0a70f4978f0a79';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}