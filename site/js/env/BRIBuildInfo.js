'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-16 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-1008';
    this._commitGIT = 'e50a5e322d9fa2f29c49a2684ffa673b00b8386d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}