'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-10 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-1226';
    this._commitGIT = '543479dabdc45ae578fca32c79069ffbdd7a5244';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}