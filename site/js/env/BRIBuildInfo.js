'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-16 08:00:04';
    this._versionBuild = 'jenkins-Bricolage-271';
    this._commitGIT = '12a20d33078facd74f93105a012683277a71293c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}