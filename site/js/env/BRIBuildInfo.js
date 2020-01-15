'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-15 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-882';
    this._commitGIT = '485f6e6c750d3909183d332d6cc21208695d1427';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}