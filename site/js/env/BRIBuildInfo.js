'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-13 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-627';
    this._commitGIT = '5abe6db219e5495048125d88ad08aa39a94e9643';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}