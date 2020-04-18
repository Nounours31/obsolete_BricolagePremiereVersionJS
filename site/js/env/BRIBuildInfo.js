'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-18 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-1257';
    this._commitGIT = '807131af8a4b639e20a925711040f6c443d10e30';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}