'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-25 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-431';
    this._commitGIT = '7135bdc43c116e9a7b2df579d86e1231e12862cd';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}