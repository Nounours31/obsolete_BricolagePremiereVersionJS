'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-31 12:00:08';
    this._versionBuild = 'jenkins-Bricolage-1672';
    this._commitGIT = '3c796ffdde67fce215e19a30f841b2750d4b546b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}