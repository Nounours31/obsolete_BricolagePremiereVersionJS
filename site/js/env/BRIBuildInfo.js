'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-29 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-693';
    this._commitGIT = '01afd00b5cbacd54a32d38d8f5945b691aa43dab';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}