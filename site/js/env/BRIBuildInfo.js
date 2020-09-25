'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-25 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-1897';
    this._commitGIT = '4aa04b4d51142f296c985edadf579db9bf8cbd09';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}