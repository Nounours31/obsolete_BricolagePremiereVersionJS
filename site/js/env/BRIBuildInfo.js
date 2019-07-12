'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-12 12:28:07';
    this._versionBuild = 'jenkins-Bricolage-119';
    this._commitGIT = '4f6dc6d91aef6b96edba3c5d8d4682abe67fb79e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}