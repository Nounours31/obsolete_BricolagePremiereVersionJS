'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-12 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-743';
    this._commitGIT = 'b6f54fa87a7012adc9fdc75540723424d05926a2';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}