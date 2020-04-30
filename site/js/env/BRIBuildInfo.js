'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-30 12:00:08';
    this._versionBuild = 'jenkins-Bricolage-1304';
    this._commitGIT = '6ee3faada97907e1f6adc366c07bb38e2018ed84';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}