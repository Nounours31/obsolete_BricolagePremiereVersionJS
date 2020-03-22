'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-22 08:00:04';
    this._versionBuild = 'jenkins-Bricolage-1147';
    this._commitGIT = '70a68054136b824b550dd467b32370460adc33d5';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}