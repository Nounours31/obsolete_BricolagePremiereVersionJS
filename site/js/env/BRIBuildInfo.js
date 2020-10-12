'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-12 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-1965';
    this._commitGIT = '27f0a7571d52a5aebdb06f84ac6f97d10e8417f4';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}