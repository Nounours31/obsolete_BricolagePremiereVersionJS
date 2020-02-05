'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-05 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-965';
    this._commitGIT = 'eadbbefa7f187adbc41856656b812025689754fe';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}