'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-07 20:00:11';
    this._versionBuild = 'jenkins-Bricolage-1578';
    this._commitGIT = '47a0d9da9ca2a17883dac59512d600755fd6d415';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}