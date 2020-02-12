'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-12 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-993';
    this._commitGIT = '9b7558b1ec0c7968eed6d34c696aebb418a1b204';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}