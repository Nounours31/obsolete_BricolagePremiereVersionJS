'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-12 12:18:07';
    this._versionBuild = 'jenkins-Bricolage-117';
    this._commitGIT = 'fe58bbc9874bcea6ac21c0666ede7ee4ca769888';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}