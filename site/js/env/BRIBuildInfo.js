'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-01 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-1063';
    this._commitGIT = 'd56b0f876348b6e1cc5a8470afc0710d8970405e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}