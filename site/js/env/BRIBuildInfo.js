'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-07 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-604';
    this._commitGIT = '62b5b20adc0e01347ead9293b9448fcb18a82faa';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}