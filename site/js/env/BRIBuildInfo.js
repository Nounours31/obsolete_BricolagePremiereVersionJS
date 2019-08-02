'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-02 16:00:15';
    this._versionBuild = 'jenkins-Bricolage-217';
    this._commitGIT = 'bfe72999a0a0861f6c9e2af6170479b4f99c0903';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}