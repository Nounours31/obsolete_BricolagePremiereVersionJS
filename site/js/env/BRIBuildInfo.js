'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-26 08:00:08';
    this._versionBuild = 'jenkins-Bricolage-1407';
    this._commitGIT = '6709915c3cbf4acb6753ddd9c894e387df179121';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}