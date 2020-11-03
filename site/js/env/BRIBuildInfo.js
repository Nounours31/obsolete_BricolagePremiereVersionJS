'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-03 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-2054';
    this._commitGIT = 'ad7995e367e5daf7ffc99f7cd10392389273c803';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}